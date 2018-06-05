import gql from 'graphql-tag';

export const CampaignQuery = gql`
    query getCampaign($campaignKey: String!) {
        campaign(key: $campaignKey) {
          id
          name
          startTime
          endTime
      }
    }
`;
