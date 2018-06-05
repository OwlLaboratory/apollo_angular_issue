import { Injectable } from '@angular/core';
import {Apollo, QueryRef} from 'apollo-angular';
import {CampaignQuery} from './graphql/campaign.graphql';
import {DocumentNode} from 'apollo-link';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private _reportKey: string;
  private _queryRef: QueryRef<any> = null;
  campaign;

  constructor(private apollo: Apollo) {
  }

  /**
   * Load campaign for the first time
   * Requests are present in: /graphql/campaign.graphql.ts
   * Handle errors and save campaign in an observable
   */
  loadCampaign(reportKey: string): void {
    this._queryRef = this.apollo.watchQuery({
      query: CampaignQuery,
      variables: { campaignKey: reportKey },
    });

    this._reportKey = reportKey;

    this._queryRef.valueChanges.subscribe(
      ({data}) => {
        console.log('VALUES CHANGES DETECTED', data);
        this.campaign = data.campaign;
      }
    );
  }

  fetchCampaignData(query: DocumentNode) {
    console.log('FETCH MORE START');
    this._queryRef.fetchMore({
        query,
        variables: { campaignKey: this._reportKey },
        updateQuery: (prev, {fetchMoreResult}) => {
          console.log('FETCH MORE updateQuery() start', fetchMoreResult);
          if (!fetchMoreResult) { return prev; }

          const updatedObj = Object.assign({}, prev, {
            campaign: Object.assign({}, prev.campaign, fetchMoreResult.campaign)
          });
          console.log('FETCH MORE updateQuery() obj updated', updatedObj);
          return updatedObj;
        },
      }
    ).then(
      () => console.log('FETCH MORE FINISHED')
    );
  }
}
