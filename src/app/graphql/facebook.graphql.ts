import gql from 'graphql-tag';

export const FacebookQuery = gql`
    query getCampaign($campaignKey: String!) {
        campaign(key: $campaignKey) {
          facebookSummary {
            postImpressions
            postReach
          }
        }
    }`;
