export interface Campaign {
  // The ID of the campaign
  id: string;
  // Name of the campaign
  name: string;
  // The start time of the campaign
  startTime: string;
  // The end time of the campaign
  endTime: string;

  // Facebook summary
  facebookSummary?:  {
    // Total postImpressions on Facebook
    postImpressions: number | null,
    // Total postReach on Facebook
    postReach: number | null,
  } | null;
}
