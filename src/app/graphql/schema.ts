/*
    GraphQL Query for get schema:

 query IntrospectionQuery {
  __schema {
    queryType {
      name
    }
    mutationType {
      name
    }
    subscriptionType {
      name
    }
    types {
      ...FullType
    }
    directives {
      name
      description
      locations
      args {
        ...InputValue
      }
    }
  }
}

fragment FullType on __Type {
  kind
  name
  description
  fields(includeDeprecated: true) {
    name
    description
    args {
      ...InputValue
    }
    type {
      ...TypeRef
    }
    isDeprecated
    deprecationReason
  }
  inputFields {
    ...InputValue
  }
  interfaces {
    ...TypeRef
  }
  enumValues(includeDeprecated: true) {
    name
    description
    isDeprecated
    deprecationReason
  }
  possibleTypes {
    ...TypeRef
  }
}

fragment InputValue on __InputValue {
  name
  description
  type {
    ...TypeRef
  }
  defaultValue
}

fragment TypeRef on __Type {
  kind
  name
  ofType {
    kind
    name
    ofType {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
              }
            }
          }
        }
      }
    }
  }
}
 */

export const GraphQLschema = {
  "__schema": {
    "queryType": {
      "name": "Query"
    },
    "mutationType": null,
    "subscriptionType": null,
    "types": [
      {
        "kind": "OBJECT",
        "name": "AnalyticsCampaignAudience",
        "description": "A google analytics audience insights",
        "fields": [
          {
            "name": "city",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "AnalyticsCity",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "source",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "AnalyticsSource",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "AnalyticsCampaignSummary",
        "description": "A google analytics insights summary",
        "fields": [
          {
            "name": "date",
            "description": "The date of the metrics on Google Analytics",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pageviews",
            "description": "The pageviews on Google Analytics",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "uniquePageviews",
            "description": "The uniquePageviews on Google Analytics",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "avgTimeOnPage",
            "description": "The avgTimeOnPage on Google Analytics",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "bounceRate",
            "description": "The bounceRate on Google Analytics",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pageCount",
            "description": "The pageCount on Google Analytics",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "AnalyticsCity",
        "description": "A google analytics city insights",
        "fields": [
          {
            "name": "city",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pageviews",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "users",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "AnalyticsPage",
        "description": null,
        "fields": [
          {
            "name": "viewId",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resUrl",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "summary",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "AnalyticsPageSummary",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "daySummary",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "AnalyticsPageSummary",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "AnalyticsPageCityInsight",
        "description": "A Analytics Page City insight",
        "fields": [
          {
            "name": "id",
            "description": "The ID of the campaign",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resId",
            "description": "The resId on Analytics",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resViewId",
            "description": "The resViewId on Analytics",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "cityId",
            "description": "The cityId on Analytics",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pageviews",
            "description": "The pageViews of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "users",
            "description": "The users of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "created",
            "description": "The created time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updated",
            "description": "The updated time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entity",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "AnalyticsPageInsight",
        "description": "A Analytics Page insight",
        "fields": [
          {
            "name": "id",
            "description": "The ID of the campaign",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resId",
            "description": "The resId on Analytics",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resViewId",
            "description": "The resViewId on Analytics",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "startTime",
            "description": "The startTime of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "endTime",
            "description": "The endTime of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "sessions",
            "description": "The sessions of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "bounces",
            "description": "The bounces of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "bounceRate",
            "description": "The bounceRate of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "sessionDuration",
            "description": "The sessionDuration of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "avgSessionDuration",
            "description": "The avgSessionDuration of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "uniqueDimensionCombinations",
            "description": "The uniqueDimensionCombinations of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "hits",
            "description": "The hits of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "organicSearches",
            "description": "The organicSearches of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pageValue",
            "description": "The pageValue of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "entrances",
            "description": "The entrances of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "entranceRate",
            "description": "The entranceRate of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pageviews",
            "description": "The pageViews of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pageviewsPerSession",
            "description": "The pageViewsPerSession of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "uniquePageviews",
            "description": "The uniquePageViews of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "timeOnPage",
            "description": "The timeOnPage of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "avgTimeOnPage",
            "description": "The avgTimeOnPage of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "exits",
            "description": "The exits of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "exitRate",
            "description": "The exitRate of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "screenviews",
            "description": "The screenviews of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "uniqueScreenviews",
            "description": "The uniqueScreenviews of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "screenviewsPerSession",
            "description": "The screenviewsPerSession of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "timeOnScreen",
            "description": "The timeOnScreen of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "avgScreenviewDuration",
            "description": "The avgScreenviewDuration of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "totalEvents",
            "description": "The totalEvents of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "uniqueEvents",
            "description": "The uniqueEvents of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "eventValue",
            "description": "The eventValue of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "created",
            "description": "The created time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updated",
            "description": "The updated time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entity",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "AnalyticsPageSourceInsight",
        "description": "A Analytics Page City insight",
        "fields": [
          {
            "name": "id",
            "description": "The ID of the campaign",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resId",
            "description": "The resId on Analytics",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resViewId",
            "description": "The resViewId on Analytics",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "source",
            "description": "The source on Analytics",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pageviews",
            "description": "The pageViews of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "users",
            "description": "The users of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "created",
            "description": "The created time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updated",
            "description": "The updated time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entity",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "AnalyticsPageSummary",
        "description": "A google analytics insights summary",
        "fields": [
          {
            "name": "date",
            "description": "The pageviews on Google Analytics",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pageviews",
            "description": "The pageviews on Google Analytics",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "uniquePageviews",
            "description": "The uniquePageviews on Google Analytics",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "avgTimeOnPage",
            "description": "The avgTimeOnPage on Google Analytics",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "bounceRate",
            "description": "The bounceRate on Google Analytics",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "AnalyticsSource",
        "description": "A google analytics source insights",
        "fields": [
          {
            "name": "source",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pageviews",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "users",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "AnalyticsView",
        "description": "A Analytics View",
        "fields": [
          {
            "name": "id",
            "description": "The ID of the campaign",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resId",
            "description": "The resId on Analytics",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "accountId",
            "description": "The accountId on Analytics",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": "The Name on Analytics",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "insights",
            "description": "The \"insights\" instagram field",
            "args": [
              {
                "name": "first",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "offset",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "AnalyticsViewInsight",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "type",
            "description": "The Type on Analytics",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "websiteUrl",
            "description": "The WebsiteUrl on Analytics",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "created",
            "description": "The created time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updated",
            "description": "The updated time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entity",
            "ofType": null
          },
          {
            "kind": "INTERFACE",
            "name": "IAnalyticsView",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "AnalyticsViewInsight",
        "description": "A Analytics Video insight",
        "fields": [
          {
            "name": "id",
            "description": "The ID of the campaign",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resId",
            "description": "The resId on Analytics",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "startTime",
            "description": "The startTime of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "endTime",
            "description": "The endTime of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "users",
            "description": "The users of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "newUsers",
            "description": "The newUsers of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "percentNewSessions",
            "description": "The endTime of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "sessionsPerUser",
            "description": "The sessionsPerUser of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "sessions",
            "description": "The sessions of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "bounces",
            "description": "The bounces of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "bounceRate",
            "description": "The bounceRate of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "sessionDuration",
            "description": "The sessionDuration of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "avgSessionDuration",
            "description": "The avgSessionDuration of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "uniqueDimensionCombinations",
            "description": "The uniqueDimensionCombinations of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "hits",
            "description": "The hits of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "organicSearches",
            "description": "The organicSearches of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pageValue",
            "description": "The pageValue of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "entrances",
            "description": "The entrances of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "entranceRate",
            "description": "The entranceRate of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pageviews",
            "description": "The pageViews of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pageviewsPerSession",
            "description": "The pageViewsPerSession of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "uniquePageviews",
            "description": "The uniquePageViews of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "timeOnPage",
            "description": "The timeOnPage of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "avgTimeOnPage",
            "description": "The avgTimeOnPage of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "exits",
            "description": "The exits of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "exitRate",
            "description": "The exitRate of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "screenviews",
            "description": "The screenviews of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "uniqueScreenviews",
            "description": "The uniqueScreenviews of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "screenviewsPerSession",
            "description": "The screenviewsPerSession of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "timeOnScreen",
            "description": "The timeOnScreen of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "avgScreenviewDuration",
            "description": "The avgScreenviewDuration of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "totalEvents",
            "description": "The totalEvents of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "uniqueEvents",
            "description": "The uniqueEvents of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "eventValue",
            "description": "The eventValue of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "created",
            "description": "The created time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updated",
            "description": "The updated time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entity",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "AppAd",
        "description": "A app ad entity",
        "fields": [
          {
            "name": "id",
            "description": "The ID of the ad",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resId",
            "description": "The ID",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "type",
            "description": "The type of the ad",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "imageUrl",
            "description": "The url of the image",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "iconUrl",
            "description": "The url of the icon",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "title",
            "description": "The title of the ad",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "subtitle",
            "description": "The subtitle of the ad",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "content",
            "description": "The content of the ad",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "summary",
            "description": "The summary of the ad",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "AppAdSummary",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "insights",
            "description": null,
            "args": [
              {
                "name": "first",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "offset",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "AppAdInsight",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "created",
            "description": "The created time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updated",
            "description": "The updated time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entity",
            "ofType": null
          },
          {
            "kind": "INTERFACE",
            "name": "IAppAd",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "AppAdCampaignSummary",
        "description": null,
        "fields": [
          {
            "name": "date",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "impressions",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "androidImpressions",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "iosImpressions",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "reach",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "androidReach",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "iosReach",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "clicks",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "androidClicks",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "iosClicks",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ctr",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "androidCtr",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "iosCtr",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "adCount",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "AppAdInsight",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resId",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "dataset",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "impressions",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "androidImpressions",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "iosImpressions",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "reach",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "androidReach",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "iosReach",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "clicks",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "androidClicks",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "iosClicks",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "startTime",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "endTime",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "created",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updated",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "AppAdSummary",
        "description": null,
        "fields": [
          {
            "name": "impressions",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "androidImpressions",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "iosImpressions",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "reach",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "androidReach",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "iosReach",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "clicks",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "androidClicks",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "iosClicks",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ctr",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "androidCtr",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "iosCtr",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "AppCampaignAudience",
        "description": "A app audience insights",
        "fields": [
          {
            "name": "city",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "AppCity",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "AppCity",
        "description": "A app city insights",
        "fields": [
          {
            "name": "city",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "interactions",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "AppPost",
        "description": "A app post entity",
        "fields": [
          {
            "name": "id",
            "description": "The ID of the ad",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resId",
            "description": "The ID",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "title",
            "description": "The title of the post",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "isYoutube",
            "description": "Does the post contains a youtube video",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "link",
            "description": "The link of the post",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "categoryName",
            "description": "The name of the category of the post",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "contentUrl",
            "description": "The content url of the post",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "image",
            "description": "The image url of the post",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "excerpt",
            "description": "The excerpt of the post",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "summary",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "AppPostSummary",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "insights",
            "description": null,
            "args": [
              {
                "name": "first",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "offset",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "AppPostInsight",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "modified",
            "description": "The last modified time of the post",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "created",
            "description": "The created time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updated",
            "description": "The updated time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entity",
            "ofType": null
          },
          {
            "kind": "INTERFACE",
            "name": "IAppPost",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "AppPostCampaignSummary",
        "description": null,
        "fields": [
          {
            "name": "date",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "impressions",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "androidImpressions",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "iosImpressions",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "reach",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "androidReach",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "iosReach",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "clicks",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "androidClicks",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "iosClicks",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "shares",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "androidShares",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "iosShares",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "likes",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "androidLikes",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "iosLikes",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "unlikes",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "androidUnlikes",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "iosUnlikes",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "engagements",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "androidEngagements",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "iosEngagements",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ctr",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "androidCtr",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "iosCtr",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postCount",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "AppPostInsight",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resId",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "dataset",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "impressions",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "androidImpressions",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "iosImpressions",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "reach",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "androidReach",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "iosReach",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "clicks",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "androidClicks",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "iosClicks",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "shares",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "androidShares",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "iosShares",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "likes",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "androidLikes",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "iosLikes",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "unlikes",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "androidUnlikes",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "iosUnlikes",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "engagements",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "androidEngagements",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "iosEngagements",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "startTime",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "endTime",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "created",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updated",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "AppPostSummary",
        "description": null,
        "fields": [
          {
            "name": "impressions",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "androidImpressions",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "iosImpressions",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "reach",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "androidReach",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "iosReach",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "clicks",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "androidClicks",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "iosClicks",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "shares",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "androidShares",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "iosShares",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "likes",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "androidLikes",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "iosLikes",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "unlikes",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "androidUnlikes",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "iosUnlikes",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "engagements",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "androidEngagements",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "iosEngagements",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ctr",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "androidCtr",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "iosCtr",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "AppPush",
        "description": "A app push entity",
        "fields": [
          {
            "name": "id",
            "description": "The ID of the ad",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resId",
            "description": "The ID",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resPostId",
            "description": "The ID of the push",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "title",
            "description": "The title of the post",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "content",
            "description": "The content of the push",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "date",
            "description": "The date of the push",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "type",
            "description": "The type of the push",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "link",
            "description": "The link of the push",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "summary",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "AppPushSummary",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "insights",
            "description": null,
            "args": [
              {
                "name": "first",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "offset",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "AppPushInsight",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "created",
            "description": "The created time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updated",
            "description": "The updated time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entity",
            "ofType": null
          },
          {
            "kind": "INTERFACE",
            "name": "IAppPush",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "AppPushCampaignSummary",
        "description": null,
        "fields": [
          {
            "name": "date",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "received",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "androidReceived",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "iosReceived",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "clicked",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "androidClicked",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "iosClicked",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "internalImpressions",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "androidInternalImpressions",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "iosInternalImpressions",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "internalClicks",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "androidInternalClicks",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "iosInternalClicks",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ctr",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "androidCtr",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "iosCtr",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pushCount",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "AppPushInsight",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resId",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "dataset",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "received",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "androidReceived",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "iosReceived",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "clicked",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "androidClicked",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "iosClicked",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "internalImpressions",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "androidInternalImpressions",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "iosInternalImpressions",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "internalClicks",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "androidInternalClicks",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "iosInternalClicks",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "startTime",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "endTime",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "created",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updated",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "AppPushSummary",
        "description": null,
        "fields": [
          {
            "name": "received",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "androidReceived",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "iosReceived",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "clicked",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "androidClicked",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "iosClicked",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "internalImpressions",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "androidInternalImpressions",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "iosInternalImpressions",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "internalClicks",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "androidInternalClicks",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "iosInternalClicks",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ctr",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "androidCtr",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "iosCtr",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "BestFormats",
        "description": null,
        "fields": [
          {
            "name": "reachBestFormats",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "CampaignFormat",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "engagementBestFormats",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "CampaignFormat",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "SCALAR",
        "name": "Boolean",
        "description": "The `Boolean` scalar type represents `true` or `false`.",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "CampaignFormat",
        "description": "A campaign entity",
        "fields": [
          {
            "name": "id",
            "description": "The ID of the campaign",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "startTime",
            "description": "The start time of the campaign format",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "endTime",
            "description": "The created time time of the campaign format",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "isCompleted",
            "description": "The start time of the campaign",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "daysDuration",
            "description": "The created time time of the campaign format",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "team",
            "description": "The team for the campaign format",
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Member",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "format",
            "description": "The format ref of the campaign format",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "FormatRef",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "platform",
            "description": "The created time time of the campaign format",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "CampaignPlatform",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resource",
            "description": "The resource associated",
            "args": [],
            "type": {
              "kind": "UNION",
              "name": "ResourceResult",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "userCpm",
            "description": "The created time time of the campaign format",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "channel",
            "description": "The channel associated ",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "Channel",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "campaign",
            "description": "The campaign associated",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "EntityRef",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "detail",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "CampaignInvoiceDetail",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "created",
            "description": "The created time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updated",
            "description": "The updated time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entity",
            "ofType": null
          },
          {
            "kind": "INTERFACE",
            "name": "ICampaignFormat",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "CampaignInvoice",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "campaign",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "EntityRef",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "advertiser",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "EntityRef",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "details",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "CampaignInvoiceDetail",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "kFactor",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "totalPrice",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "sellingPrice",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "price",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "feeValue",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "vatPercentage",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "vatValue",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "sellingVatValue",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "sellingVatPercentage",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "priceInclTax",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "sellingPriceInclTax",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "currency",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "currencyRate",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "created",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updated",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ICampaignInvoice",
            "ofType": null
          },
          {
            "kind": "INTERFACE",
            "name": "Entity",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "CampaignInvoiceDetail",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "channel",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "ChannelRef",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "format",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "FormatRef",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "startDate",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "daysDuration",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "price",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "cpm",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "isDeclarative",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "cpmFactorValue",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "cpmFactorName",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "userCpm",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "userPrice",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "feeValue",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "feePercentage",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "totalPrice",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "totalCpm",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "sellingCpm",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "sellingPrice",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "currency",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "CampaignPlatform",
        "description": "A campaign platform entity",
        "fields": [
          {
            "name": "name",
            "description": "The name of the platform",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "type",
            "description": "The type of the platform",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resId",
            "description": "The type of the platform",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resUrl",
            "description": "The type of the platform",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "CampaignTrackedUrl",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "format",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "FormatRef",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "campaign",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "EntityRef",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "trackedUrls",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "TrackedUrlRef",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "summary",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "TrackedUrlSummary",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "created",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updated",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entity",
            "ofType": null
          },
          {
            "kind": "INTERFACE",
            "name": "ICampaignTrackedUrl",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "CampaignValidation",
        "description": "A campaign agency",
        "fields": [
          {
            "name": "state",
            "description": "The state of the validation",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "type",
            "description": "The type of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "entity",
            "description": "The entity associated to the validation",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "EntityRef",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "Channel",
        "description": "A Channel entity",
        "fields": [
          {
            "name": "id",
            "description": "The ID of the Channel",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": "What this human calls themselves",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "platform",
            "description": "The updated time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Platform",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "publisher",
            "description": "The publisher of the Channel",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "EntityRef",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resource",
            "description": "The resource associated",
            "args": [],
            "type": {
              "kind": "UNION",
              "name": "ResourceChanelResult",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "created",
            "description": "The created time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updated",
            "description": "The updated time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entity",
            "ofType": null
          },
          {
            "kind": "INTERFACE",
            "name": "IChannel",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ChannelInput",
        "description": "The input object sent when someone is creating/updating a new Channel",
        "fields": null,
        "inputFields": [
          {
            "name": "name",
            "description": "Name of the Channel",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "platform",
            "description": "Platform of the Channel",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "PlatformInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "ChannelRef",
        "description": "A Channel ref",
        "fields": [
          {
            "name": "id",
            "description": "The ID of the Channel",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": "The name of the Channel",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "publisher",
            "description": "The publisher of the Channel",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "EntityRef",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "Child",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": "The ID of the child",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "igId",
            "description": "The igId of the child",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "mediaType",
            "description": "The mediaType of the child",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "mediaURL",
            "description": "The mediaURL of the child",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "permalink",
            "description": "The permalink of the child",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "shortcode",
            "description": "The shortcode of the child",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CreateChannelInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "Channel",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ChannelInput",
                "ofType": null
              }
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DeleteChannelInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INTERFACE",
        "name": "Entity",
        "description": "A character from the Star Wars universe",
        "fields": [
          {
            "name": "id",
            "description": "The ID of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "created",
            "description": "The created time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updated",
            "description": "The updated time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Format",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "Channel",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "TrackedUrl",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "CampaignTrackedUrl",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "c",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "CampaignFormat",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "CampaignInvoice",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "FacebookPost",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "FacebookPostInsight",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "InstagramMedia",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "InstagramMediaInsight",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "YoutubeVideo",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "YoutubeVideoInsight",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "TwitterStatus",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "TwitterStatusInsight",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "FacebookPage",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "FacebookPageInsight",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "InstagramPage",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "InstagramPageInsight",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "TwitterUser",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "TwitterUserInsight",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "YoutubeChannel",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "YoutubeChannelInsight",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "AnalyticsView",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "AnalyticsViewInsight",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "AnalyticsPageInsight",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "AnalyticsPageCityInsight",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "AnalyticsPageSourceInsight",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "AppAd",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "AppPost",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "AppPush",
            "ofType": null
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "EntityRef",
        "description": "A EntityRef object",
        "fields": [
          {
            "name": "id",
            "description": "The ID of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": "The name of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "type",
            "description": "The type of the entity",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "FacebookAgeGender",
        "description": "A facebook age gender insights",
        "fields": [
          {
            "name": "gender",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ageRange",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "value",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "FacebookAttachment",
        "description": "A FacebookAttachment object",
        "fields": [
          {
            "name": "media",
            "description": "The facebook target property",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "FacebookMedia",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "target",
            "description": "The facebook target property",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "FacebookTarget",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "title",
            "description": "The facebook title property",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "type",
            "description": "The facebook type property",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "url",
            "description": "The facebook url property",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "FacebookCampaignAudience",
        "description": "A facebook audience insights",
        "fields": [
          {
            "name": "ageGenderTotal",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ageGender",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "FacebookAgeGender",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "cityTotal",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "city",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "FacebookCity",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "FacebookCampaignSummary",
        "description": "A facebook insights summary",
        "fields": [
          {
            "name": "date",
            "description": "The date of the metrics on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postImpressions",
            "description": "The postImpressions on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postReach",
            "description": "The postReach on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postConsumptions",
            "description": "The postConsumptions on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postEngagedUsers",
            "description": "The postEngagedUsers on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postVideoViews3s",
            "description": "The postVideoViews3s on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postVideoViews10s",
            "description": "The postVideoViews10s on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postReactions",
            "description": "The postReactions on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postReactionsLike",
            "description": "The postReactionsLike on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postReactionsLove",
            "description": "The postReactionsLove on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postReactionsWow",
            "description": "The postReactionsWow on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postReactionsHaha",
            "description": "The postReactionsLove on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postReactionsWow",
            "description": "The postReactionsWow on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postReactionsHaha",
            "description": "The postReactionsHaha on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postReactionsSorry",
            "description": "The postReactionsSorry on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postReactionsAnger",
            "description": "The postReactionsAnger on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postComments",
            "description": "The postComments on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postShares",
            "description": "The postShares on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postNegativeFeedback",
            "description": "The postNegativeFeedback on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postLinkClicks",
            "description": "The postLinkClicks on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postCtr",
            "description": "The postCtr on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postCount",
            "description": "The count of post on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "FacebookCity",
        "description": "A facebook city insights",
        "fields": [
          {
            "name": "city",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "value",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "FacebookComment",
        "description": "A FacebookComment object",
        "fields": [
          {
            "name": "summary",
            "description": "The facebook summary property",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "FacebookCommentSummary",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "FacebookCommentSummary",
        "description": "A FacebookCommentSummary object",
        "fields": [
          {
            "name": "order",
            "description": "The facebook order property",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "totalCount",
            "description": "The facebook totalCount property",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "canComment",
            "description": "The facebook canComment property",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "FacebookCount",
        "description": "A FacebookCount object",
        "fields": [
          {
            "name": "count",
            "description": "The facebook count property",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "FacebookCover",
        "description": "A FacebookTag object",
        "fields": [
          {
            "name": "coverId",
            "description": "The facebook coverId property",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "offsetX",
            "description": "The facebook offsetX property",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "offsetY",
            "description": "The facebook offsetY property",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "source",
            "description": "The facebook source property",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "id",
            "description": "The facebook id property",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "FacebookImage",
        "description": "A FacebookImage object",
        "fields": [
          {
            "name": "height",
            "description": "The facebook height image property",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "width",
            "description": "The facebook width image property",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "src",
            "description": "The facebook src image property",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "FacebookLocation",
        "description": "A FacebookTag object",
        "fields": [
          {
            "name": "city",
            "description": "The facebook coverId property",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "country",
            "description": "The facebook offsetX property",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "latitude",
            "description": "The facebook offsetY property",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "longitude",
            "description": "The facebook source property",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "street",
            "description": "The facebook id property",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "zip",
            "description": "The facebook id property",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "FacebookMedia",
        "description": "A FacebookImage object",
        "fields": [
          {
            "name": "image",
            "description": "The facebook image property",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "FacebookImage",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "FacebookPage",
        "description": "A campaign entity",
        "fields": [
          {
            "name": "id",
            "description": "The ID of the campaign",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resId",
            "description": "The ID on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": "The ID on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "about",
            "description": "The ID on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "category",
            "description": "The ID on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "cover",
            "description": "The ID on Facebook",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "FacebookCover",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": "The ID on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "fanCount",
            "description": "The ID on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "link",
            "description": "The ID on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "location",
            "description": "The ID on Facebook",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "FacebookLocation",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "picture",
            "description": "The ID on Facebook",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "FacebookPicture",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "userName",
            "description": "The ID on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "insights",
            "description": "The \"from\" facebook field",
            "args": [
              {
                "name": "first",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "offset",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "FacebookPageInsight",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "lastScan",
            "description": "The ID on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "created",
            "description": "The created time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updated",
            "description": "The updated time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entity",
            "ofType": null
          },
          {
            "kind": "INTERFACE",
            "name": "IFacebookPage",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "FacebookPageInsight",
        "description": "A Facebook Page insight",
        "fields": [
          {
            "name": "id",
            "description": "The ID of the campaign",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resId",
            "description": "The resId on Facebook",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "startTime",
            "description": "The startTime of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "endTime",
            "description": "The endTime of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pageStories",
            "description": "The pageStories of the page itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pageImpressions",
            "description": "The pageImpressions of the page itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pageImpressionsUnique",
            "description": "The pageImpressionsUnique of the page itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pageImpressionsPaid",
            "description": "The pageImpressionsPaid of the page itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pageImpressionsPaidUnique",
            "description": "The pageImpressionsPaidUnique of the page itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pageImpressionsOrganic",
            "description": "The pageImpressionsOrganic of the page itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pageImpressionsOrganicUnique",
            "description": "The pageImpressionsOrganicUnique of the page itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pageImpressionsViral",
            "description": "The pageImpressionsViral of the page itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pageImpressionsViralUnique",
            "description": "The pageImpressionsViralUnique of the page itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pageConsumptions",
            "description": "The pageImpressionsConsumptions of the page itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pageConsumptionsUnique",
            "description": "The pageImpressionsConsumptionsUnique of the page itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pageEngagedUsers",
            "description": "The pageEngagedUsers of the page itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pageVideoViews",
            "description": "The pageVideoViews of the page itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pageFanAdds",
            "description": "The pageVideoViews of the page itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pageFanRemoves",
            "description": "The pageVideoViews of the page itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pageFanAddsUnique",
            "description": "The pageVideoViews of the page itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pageStoryAdds",
            "description": "The pageVideoViews of the page itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pageVideoViews10s",
            "description": "The pageVideoViews10s of the page itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pageCTR",
            "description": "The pageCTR of the page itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pageActionsPostReactionsTotal",
            "description": "The pageReactionsTotal of the page itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pageActionsPostReactionsLikeTotal",
            "description": "The pageReactionsLikeTotal of the page itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pageActionsPostReactionsLoveTotal",
            "description": "The pageReactionsLoveTotal of the page itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pageActionsPostReactionsWowTotal",
            "description": "The pageReactionsWowTotal of the page itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pageActionsPostReactionsHahaTotal",
            "description": "The pageReactionsHahaTotal of the page itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pageActionsPostReactionsSorryTotal",
            "description": "The pageReactionsSorryTotal of the page itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pageActionsPostReactionsAngerTotal",
            "description": "The pageReactionsAngerTotal of the page itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pageVideoViewTime",
            "description": "The pageVideoViewTime of the page itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "created",
            "description": "The created time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updated",
            "description": "The updated time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entity",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "FacebookPicture",
        "description": "A FacebookTag object",
        "fields": [
          {
            "name": "URL",
            "description": "The facebook URL property",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "cacheKey",
            "description": "The facebook cacheKey property",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "width",
            "description": "The facebook type property",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "height",
            "description": "The facebook offset property",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "isSilhouette",
            "description": "The facebook length property",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "FacebookPost",
        "description": "A campaign entity",
        "fields": [
          {
            "name": "id",
            "description": "The ID of the campaign",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resId",
            "description": "The ID on Facebook",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resPageId",
            "description": "The ID of the page",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resPostId",
            "description": "The ID of the post itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "icon",
            "description": "The \"icon\" facebook field",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "instagramEligibility",
            "description": "The \"instagramEligibility\" facebook field",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "isHidden",
            "description": "The \"isHidden\" facebook field",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "isInstagramEligible",
            "description": "The \"isInstagramEligible\" facebook field",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "isPublished",
            "description": "The \"isPublished\" facebook field",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "link",
            "description": "The \"Icon\" facebook field",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "message",
            "description": "The \"message\" facebook field",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": "The \"name\" facebook field",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "objectId",
            "description": "The object id facebook field",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "parentId",
            "description": "The object id facebook field",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "promotableId",
            "description": "The promotableId facebook field",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "promotionStatus",
            "description": "The promotionStatus facebook field",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "story",
            "description": "The promotionStatus facebook field",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "permalinkURL",
            "description": "The \"permalinkURL\" facebook field",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "picture",
            "description": "The \"picture\" facebook field",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "source",
            "description": "The \"source\" facebook field",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "statusType",
            "description": "The \"statusType\" facebook field",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "type",
            "description": "The \"type\" facebook field",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": "The \"description\" facebook field",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "caption",
            "description": "The \"caption\" facebook field",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "privacy",
            "description": "The \"privacy\" facebook field",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "FacebookPrivacy",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "shares",
            "description": "The \"shares\" facebook field",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "FacebookCount",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "comments",
            "description": "The \"shares\" facebook field",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "FacebookComment",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "feedTargeting",
            "description": "The fb targeting facebook field",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "FacebookTargeting",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "properties",
            "description": "The \"shares\" facebook field",
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "FacebookProperty",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "attachments",
            "description": "The \"shares\" facebook field",
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "FacebookAttachment",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "messageTags",
            "description": "The MessageTags facebook field",
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "FacebookTag",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "from",
            "description": "The \"from\" facebook field",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "EntityRef",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "insights",
            "description": "The \"from\" facebook field",
            "args": [
              {
                "name": "first",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "offset",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "FacebookPostInsight",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdTime",
            "description": "The \"created time\" facebook field",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedTime",
            "description": "The \"updated time\" facebook field",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "adminCreator",
            "description": "The \"admin creator\" facebook field",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "EntityRef",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "fullPicture",
            "description": "The \"fullPicture\" facebook field",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "summary",
            "description": "The Summary compute by FameUS",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "FacebookPostSummary",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "lastScan",
            "description": "The lastScan facebook field",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "created",
            "description": "The created time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updated",
            "description": "The updated time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entity",
            "ofType": null
          },
          {
            "kind": "INTERFACE",
            "name": "IFacebookPost",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "FacebookPostInsight",
        "description": "A Facebook Post insight",
        "fields": [
          {
            "name": "id",
            "description": "The ID of the campaign",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resId",
            "description": "The resId on Facebook",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resPageId",
            "description": "The resPageId of the page",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resPostId",
            "description": "The resPostId of the post itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resPostId",
            "description": "The resPostId of the post itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postType",
            "description": "The postTypes of the post itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postStories",
            "description": "The postStories of the post itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postImpressions",
            "description": "The postImpressions of the post itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postImpressionsDaily",
            "description": "The postImpressions of the post itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postImpressionsUnique",
            "description": "The postImpressionsUnique of the post itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postImpressionsPaid",
            "description": "The postImpressionsPaid of the post itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postImpressionsPaidUnique",
            "description": "The postImpressionsPaidUnique of the post itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postImpressionsOrganic",
            "description": "The postImpressionsOrganic of the post itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postImpressionsOrganicUnique",
            "description": "The postImpressionsOrganicUnique of the post itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postImpressionsViral",
            "description": "The postImpressionsViral of the post itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postImpressionsViralUnique",
            "description": "The postImpressionsViralUnique of the post itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postConsumptions",
            "description": "The postImpressionsConsumptions of the post itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postConsumptionsUnique",
            "description": "The postImpressionsConsumptionsUnique of the post itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postConsumptionsDaily",
            "description": "The postImpressions of the post itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postEngagedUsers",
            "description": "The postEngagedUsers of the post itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postVideoViews",
            "description": "The postVideoViews of the post itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postVideoViews10s",
            "description": "The postVideoViews10s of the post itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postFanReach",
            "description": "The postFanReach of the post itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postCTR",
            "description": "The postFanReach of the post itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postShares",
            "description": "The postShares of the post itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postComments",
            "description": "The postComments of the post itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postReactionsTotal",
            "description": "The postReactionsTotal of the post itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postReactionsLikeTotal",
            "description": "The postReactionsLikeTotal of the post itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postReactionsLoveTotal",
            "description": "The postReactionsLoveTotal of the post itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postReactionsWowTotal",
            "description": "The postReactionsWowTotal of the post itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postReactionsHahaTotal",
            "description": "The postReactionsHahaTotal of the post itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postReactionsSorryTotal",
            "description": "The postReactionsSorryTotal of the post itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postReactionsAngerTotal",
            "description": "The postReactionsAngerTotal of the post itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postVideoLength",
            "description": "The postVideoLength of the post itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postVideoViewTime",
            "description": "The postVideoViewTime of the post itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postVideoAvgTimeWatched",
            "description": "The postVideoAvgTimeWatched of the post itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postVideoAvgPercentageWatched",
            "description": "The postVideoAvgPercentageWatched of the post itself",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "startTime",
            "description": "The startTime of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "endTime",
            "description": "The endTime of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "created",
            "description": "The created time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updated",
            "description": "The updated time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entity",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "FacebookPostSummary",
        "description": "A Facebook Post insight",
        "fields": [
          {
            "name": "postImpressions",
            "description": "The ID of the campaign",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postReach",
            "description": "The postReach on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postConsumptions",
            "description": "The postConsumptions on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postEngagedUsers",
            "description": "The postEngagedUsers on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postVideoViews3s",
            "description": "The postVideoViews3s on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postVideoViews10s",
            "description": "The postVideoViews10s on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postReactions",
            "description": "The postReactions on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postReactionsLike",
            "description": "The postReactionsLike on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postReactionsLove",
            "description": "The postReactionsLove on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postReactionsWow",
            "description": "The postReactionsWow on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postReactionsHaha",
            "description": "The postReactionsLove on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postReactionsWow",
            "description": "The postReactionsWow on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postReactionsHaha",
            "description": "The postReactionsHaha on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postReactionsSorry",
            "description": "The postReactionsSorry on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postReactionsAnger",
            "description": "The postReactionsAnger on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postComments",
            "description": "The postComments on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postShares",
            "description": "The postShares on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postNegativeFeedback",
            "description": "The postNegativeFeedback on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postLinkClicks",
            "description": "The postLinkClicks on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "postCtr",
            "description": "The postCtr on Facebook",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "FacebookPrivacy",
        "description": "A FacebookImage object",
        "fields": [
          {
            "name": "allow",
            "description": "The facebook allow property",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deny",
            "description": "The facebook deny property",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": "The facebook description property",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "friends",
            "description": "The facebook friends property",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "value",
            "description": "The facebook value property",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "FacebookProperty",
        "description": "A FacebookProperty object",
        "fields": [
          {
            "name": "name",
            "description": "The facebook name property",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "text",
            "description": "The facebook text property",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "FacebookTag",
        "description": "A FacebookTag object",
        "fields": [
          {
            "name": "id",
            "description": "The facebook id property",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": "The facebook name property",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "type",
            "description": "The facebook type property",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "offset",
            "description": "The facebook offset property",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "length",
            "description": "The facebook length property",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "FacebookTarget",
        "description": "A FacebookTarget object",
        "fields": [
          {
            "name": "id",
            "description": "The facebook id target property",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "url",
            "description": "The facebook url target property",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "FacebookTargeting",
        "description": "A FacebookTargeting object",
        "fields": [
          {
            "name": "ageMax",
            "description": "The facebook age max property",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ageMin",
            "description": "The facebook age min property",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "cities",
            "description": "The facebook name property",
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "collegeYears",
            "description": "The facebook name property",
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "countries",
            "description": "The facebook name property",
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "educationStatuses",
            "description": "The facebook name property",
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "genders",
            "description": "The facebook name property",
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "interestedIn",
            "description": "The facebook name property",
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "interests",
            "description": "The facebook name property",
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "locales",
            "description": "The facebook name property",
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "relationshipStatuses",
            "description": "The facebook name property",
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "SCALAR",
        "name": "Float",
        "description": "The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point).",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "Format",
        "description": "A Format entity",
        "fields": [
          {
            "name": "id",
            "description": "The ID of the format",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "platform",
            "description": "The format platform",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "FormatPlatform",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": "The name of the format",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "quantityDay",
            "description": "The quantityDay of the format",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "timescale",
            "description": "The timescale of the format",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "created",
            "description": "The created time of the format",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updated",
            "description": "The updated time of the format",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entity",
            "ofType": null
          },
          {
            "kind": "INTERFACE",
            "name": "IFormat",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "FormatPlatform",
        "description": null,
        "fields": [
          {
            "name": "name",
            "description": "The platform name",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "type",
            "description": "The platform type",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "mediaType",
            "description": "The platform mediaType",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "mediaFilter",
            "description": "The platform mediaFilter",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "FormatRef",
        "description": "A Channel ref",
        "fields": [
          {
            "name": "id",
            "description": "The ID of the format",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": "The name of the format",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "timescale",
            "description": "The timescale of the format",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INTERFACE",
        "name": "IAnalyticsView",
        "description": null,
        "fields": [
          {
            "name": "insights",
            "description": null,
            "args": [
              {
                "name": "first",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "offset",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "AnalyticsViewInsight",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "AnalyticsView",
            "ofType": null
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "IAppAd",
        "description": null,
        "fields": [
          {
            "name": "insights",
            "description": null,
            "args": [
              {
                "name": "first",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "offset",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "AppAdInsight",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "AppAd",
            "ofType": null
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "IAppPost",
        "description": null,
        "fields": [
          {
            "name": "insights",
            "description": null,
            "args": [
              {
                "name": "first",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "offset",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "AppPostInsight",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "AppPost",
            "ofType": null
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "IAppPush",
        "description": null,
        "fields": [
          {
            "name": "insights",
            "description": null,
            "args": [
              {
                "name": "first",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "offset",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "AppPushInsight",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "AppPush",
            "ofType": null
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "ICampaign",
        "description": null,
        "fields": [
          {
            "name": "advertiser",
            "description": "The platform connected to the campaign",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "EntityRef",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "agency",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "EntityRef",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "team",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Member",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "channels",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "ChannelRef",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "publishers",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "EntityRef",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "validations",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "CampaignValidation",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "formats",
            "description": null,
            "args": [
              {
                "name": "first",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "offset",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "CampaignFormat",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "bestFormats",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "BestFormats",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "trackedUrls",
            "description": null,
            "args": [
              {
                "name": "platformName",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "CampaignTrackedUrl",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "c",
            "ofType": null
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "ICampaignFormat",
        "description": null,
        "fields": [
          {
            "name": "team",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Member",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "platform",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "CampaignPlatform",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "format",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "FormatRef",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "channel",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "Channel",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resource",
            "description": null,
            "args": [],
            "type": {
              "kind": "UNION",
              "name": "ResourceResult",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "campaign",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "EntityRef",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "detail",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "CampaignInvoiceDetail",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "CampaignFormat",
            "ofType": null
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "ICampaignInvoice",
        "description": null,
        "fields": [
          {
            "name": "campaign",
            "description": "The platform connected to the campaign",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "EntityRef",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "advertiser",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "EntityRef",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "details",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "CampaignInvoiceDetail",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "CampaignInvoice",
            "ofType": null
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "ICampaignTrackedUrl",
        "description": null,
        "fields": [
          {
            "name": "campaign",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "EntityRef",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "format",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "FormatRef",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "CampaignTrackedUrl",
            "ofType": null
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "IChannel",
        "description": null,
        "fields": [
          {
            "name": "platform",
            "description": "The platform connected to the Channel",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Platform",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resource",
            "description": "The resource connected to the Channel",
            "args": [],
            "type": {
              "kind": "UNION",
              "name": "ResourceChanelResult",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Channel",
            "ofType": null
          }
        ]
      },
      {
        "kind": "SCALAR",
        "name": "ID",
        "description": "The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `\"4\"`) or integer (such as `4`) input value will be accepted as an ID.",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INTERFACE",
        "name": "IFacebookPage",
        "description": null,
        "fields": [
          {
            "name": "insights",
            "description": null,
            "args": [
              {
                "name": "first",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "offset",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "FacebookPageInsight",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "FacebookPage",
            "ofType": null
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "IFacebookPost",
        "description": null,
        "fields": [
          {
            "name": "insights",
            "description": null,
            "args": [
              {
                "name": "first",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "offset",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "FacebookPostInsight",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "FacebookPost",
            "ofType": null
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "IFormat",
        "description": null,
        "fields": [
          {
            "name": "platform",
            "description": "The platform connected to the Format",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "FormatPlatform",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Format",
            "ofType": null
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "IInstagramMedia",
        "description": null,
        "fields": [
          {
            "name": "insights",
            "description": null,
            "args": [
              {
                "name": "first",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "offset",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "InstagramMediaInsight",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "InstagramMedia",
            "ofType": null
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "IInstagramPage",
        "description": null,
        "fields": [
          {
            "name": "insights",
            "description": null,
            "args": [
              {
                "name": "first",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "offset",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "InstagramPageInsight",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "InstagramPage",
            "ofType": null
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "ITrackedUrl",
        "description": null,
        "fields": [
          {
            "name": "entity",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "EntityRef",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "team",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Member",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "insights",
            "description": null,
            "args": [
              {
                "name": "first",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "offset",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "TrackedUrlInsight",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "summary",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "TrackedUrlSummary",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "TrackedUrl",
            "ofType": null
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "ITwitterStatus",
        "description": null,
        "fields": [
          {
            "name": "insights",
            "description": null,
            "args": [
              {
                "name": "first",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "offset",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "TwitterStatusInsight",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "TwitterStatus",
            "ofType": null
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "ITwitterUser",
        "description": null,
        "fields": [
          {
            "name": "insights",
            "description": null,
            "args": [
              {
                "name": "first",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "offset",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "TwitterUserInsight",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "TwitterUser",
            "ofType": null
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "IYoutubeChannel",
        "description": null,
        "fields": [
          {
            "name": "insights",
            "description": null,
            "args": [
              {
                "name": "first",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "offset",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "YoutubeChannelInsight",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "YoutubeChannel",
            "ofType": null
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "IYoutubeVideo",
        "description": null,
        "fields": [
          {
            "name": "insights",
            "description": null,
            "args": [
              {
                "name": "first",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "offset",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "YoutubeVideoInsight",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": []
      },
      {
        "kind": "OBJECT",
        "name": "InstagramAgeGender",
        "description": "A instagram age gender insights",
        "fields": [
          {
            "name": "gender",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ageRange",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "value",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "InstagramCampaignAudience",
        "description": "A instagram audience insights",
        "fields": [
          {
            "name": "ageGenderTotal",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ageGender",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "InstagramAgeGender",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "cityTotal",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "city",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "InstagramCity",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "InstagramCampaignSummary",
        "description": "A Instagram Campaign Insight Summary",
        "fields": [
          {
            "name": "date",
            "description": "The date of the metrics on Instagram",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "impressions",
            "description": "The impressions on Instagram",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "reach",
            "description": "The reach on Instagram",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "engagements",
            "description": "The engagements on Instagram",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "likes",
            "description": "The likes on Instagram",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "comments",
            "description": "The comments on Instagram",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "saved",
            "description": "The saved count on Instagram",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ctr",
            "description": "The ctr on Instagram",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "count",
            "description": "The count of media on Instagram",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "storiesImpressions",
            "description": "The impressions on Instagram Stories",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "storiesReach",
            "description": "The reach on Instagram Stories",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "storiesCount",
            "description": "The count of stories on Instagram",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "InstagramCity",
        "description": "A instagram city insights",
        "fields": [
          {
            "name": "city",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "value",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "InstagramMedia",
        "description": "Instagram media",
        "fields": [
          {
            "name": "id",
            "description": "The ID of the campaign",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resId",
            "description": "The ID on Instagram",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resPageId",
            "description": "The ID of the page",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "caption",
            "description": "The caption of the media",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "commentsCount",
            "description": "The CommentsCount of the media",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "isCommentEnabled",
            "description": "The IsCommentEnabled of the media",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "igId",
            "description": "The IgId of the media",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "likeCount",
            "description": "The LikeCount of the media",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "mediaType",
            "description": "The mediaType of the media",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "mediaURL",
            "description": "The mediaURL of the media",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "thumbnailURL",
            "description": "The thumbnailURL of the media",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "permalink",
            "description": "The permalink of the media",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "shortcode",
            "description": "The shortcode of the media",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "timestamp",
            "description": "The timestamp of the media",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "insights",
            "description": "The \"insights\" instagram field",
            "args": [
              {
                "name": "first",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "offset",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "InstagramMediaInsight",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "isStory",
            "description": "The isStory of the media",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "owner",
            "description": "The owner of the media",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "Owner",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "children",
            "description": "The children of the media",
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Child",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "summary",
            "description": "The Summary compute by FameUS",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "InstagramMediaSummary",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "created",
            "description": "The created time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updated",
            "description": "The updated time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entity",
            "ofType": null
          },
          {
            "kind": "INTERFACE",
            "name": "IInstagramMedia",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "InstagramMediaInsight",
        "description": "A Instagram Media insight",
        "fields": [
          {
            "name": "id",
            "description": "The ID of the campaign",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resId",
            "description": "The resId on Instagram",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resPageId",
            "description": "The resPageId on Instagram",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "mediaType",
            "description": "The MediaType on Instagram",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "engagement",
            "description": "The Engagement on Instagram",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "impressions",
            "description": "The Impressions on Instagram",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "reach",
            "description": "The Reach on Instagram",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "saved",
            "description": "The Saved on Instagram",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "isStory",
            "description": "The IsStory on Instagram",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "startTime",
            "description": "The startTime of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "endTime",
            "description": "The endTime of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "created",
            "description": "The created time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updated",
            "description": "The updated time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entity",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "InstagramMediaSummary",
        "description": "A Instagram Media Insight Summary",
        "fields": [
          {
            "name": "impressions",
            "description": "The impressions on Instagram",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "reach",
            "description": "The reach on Instagram",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "engagements",
            "description": "The engagements on Instagram",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "likes",
            "description": "The likes on Instagram",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "comments",
            "description": "The comments on Instagram",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "saved",
            "description": "The saved on Instagram",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ctr",
            "description": "The ctr on Instagram",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "InstagramPage",
        "description": "Instagram page",
        "fields": [
          {
            "name": "id",
            "description": "The ID of the campaign",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resId",
            "description": "The ID on Instagram",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "biography",
            "description": "The biography on Instagram",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "followsCount",
            "description": "The followsCount on Instagram",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "followersCount",
            "description": "The followersCount on Instagram",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "igId",
            "description": "The igId on Instagram",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "mediaCount",
            "description": "The mediaCount on Instagram",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": "The name on Instagram",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "profilePictureURL",
            "description": "The profilePictureURL on Instagram",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "username",
            "description": "The username on Instagram",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "website",
            "description": "The website on Instagram",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "insights",
            "description": "The \"insights\" instagram field",
            "args": [
              {
                "name": "first",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "offset",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "InstagramPageInsight",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "created",
            "description": "The created time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updated",
            "description": "The updated time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entity",
            "ofType": null
          },
          {
            "kind": "INTERFACE",
            "name": "IInstagramPage",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "InstagramPageInsight",
        "description": "A Instagram Page insight",
        "fields": [
          {
            "name": "id",
            "description": "The ID of the campaign",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resId",
            "description": "The resId on Instagram",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "startTime",
            "description": "The startTime of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "endTime",
            "description": "The endTime of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "impressions",
            "description": "The Impressions on Instagram",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "reach",
            "description": "The Reach on Instagram",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "followerCount",
            "description": "The Reach on Instagram",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "emailContacts",
            "description": "The Reach on Instagram",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "textMessageClicks",
            "description": "The Reach on Instagram",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "phoneCallClicks",
            "description": "The Reach on Instagram",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "getDirectionsClicks",
            "description": "The Reach on Instagram",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "websiteClicks",
            "description": "The Reach on Instagram",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "profileViews",
            "description": "The Reach on Instagram",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "created",
            "description": "The created time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updated",
            "description": "The updated time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entity",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "SCALAR",
        "name": "Int",
        "description": "The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "Member",
        "description": "A team member",
        "fields": [
          {
            "name": "id",
            "description": "The ID of the user",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": "The name of the user",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "role",
            "description": "Role of the user in the team",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "Owner",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": "The ID of the owner",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "Platform",
        "description": null,
        "fields": [
          {
            "name": "name",
            "description": "The platform name",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "type",
            "description": "The platform type",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resId",
            "description": "The platform resId",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resUrl",
            "description": "The platform resUrl",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resName",
            "description": "The platform resName",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PlatformInput",
        "description": "The input platform object sent when someone is creating/updating a new Channel",
        "fields": null,
        "inputFields": [
          {
            "name": "name",
            "description": "Name of the platform",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "Query",
        "description": "The query type, represents all of the entry points into our object graph",
        "fields": [
          {
            "name": "campaign",
            "description": null,
            "args": [
              {
                "name": "key",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "c",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "UNION",
        "name": "ResourceChanelResult",
        "description": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "FacebookPage",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "InstagramPage",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "YoutubeChannel",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "TwitterUser",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "AnalyticsView",
            "ofType": null
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "ResourceResult",
        "description": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "FacebookPost",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "InstagramMedia",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "YoutubeVideo",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "TwitterStatus",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "AppAd",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "AppPost",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "AppPush",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "AnalyticsPage",
            "ofType": null
          }
        ]
      },
      {
        "kind": "SCALAR",
        "name": "String",
        "description": "The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "Summary",
        "description": "A campaign insights summary",
        "fields": [
          {
            "name": "resId",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "impressions",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "impressionsSource",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "SummarySource",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "videoViews",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "videoViewsSource",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "SummarySource",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "engagements",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "engagementsSource",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "SummarySource",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "typedEngagementsSource",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "SummarySource",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "city",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "SummaryCity",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ageGender",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "SummaryAgeGender",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "SummaryAgeGender",
        "description": null,
        "fields": [
          {
            "name": "gender",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ageRange",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "value",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "SummaryCity",
        "description": null,
        "fields": [
          {
            "name": "city",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "value",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "SummarySource",
        "description": null,
        "fields": [
          {
            "name": "source",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "value",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "TrackedUrl",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "entity",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "EntityRef",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "team",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Member",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "destinationUrl",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "code",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "insights",
            "description": null,
            "args": [
              {
                "name": "first",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "offset",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "TrackedUrlInsight",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "summary",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "TrackedUrlSummary",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "created",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updated",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entity",
            "ofType": null
          },
          {
            "kind": "INTERFACE",
            "name": "ITrackedUrl",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "TrackedUrlCampaignSummary",
        "description": null,
        "fields": [
          {
            "name": "date",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "reach",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "clicks",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "device",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "TrackedUrlSummaryDevice",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "system",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "TrackedUrlSummarySystem",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "TrackedUrlInsight",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "source",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "TrackedUrlInsightSource",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "browser",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "TrackedUrlInsightBrowser",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "engine",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "TrackedUrlInsightEngine",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "bestLanguage",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "TrackedUrlInsightLanguage",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "language",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "TrackedUrlInsightLanguage",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "cookie",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "userAgent",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deviceType",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "created",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "TrackedUrlInsightBrowser",
        "description": null,
        "fields": [
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "version",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "TrackedUrlInsightEngine",
        "description": null,
        "fields": [
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "version",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "system",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "TrackedUrlInsightLanguage",
        "description": null,
        "fields": [
          {
            "name": "Locale",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "Q",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "TrackedUrlInsightSource",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "code",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "TrackedUrlRef",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "destinationUrl",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "code",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "summary",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "TrackedUrlSummary",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "TrackedUrlSummary",
        "description": null,
        "fields": [
          {
            "name": "clicks",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "reach",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "device",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "TrackedUrlSummaryDevice",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "system",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "TrackedUrlSummarySystem",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "TrackedUrlSummaryDevice",
        "description": null,
        "fields": [
          {
            "name": "deviceType",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "clicks",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "reach",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "TrackedUrlSummarySystem",
        "description": null,
        "fields": [
          {
            "name": "system",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "clicks",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "reach",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "TwitterStatus",
        "description": "A twitter status entity",
        "fields": [
          {
            "name": "id",
            "description": "The ID of the campaign",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resId",
            "description": "The ID on Twitter",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "idStr",
            "description": "The idStr on Twitter",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": "The CreatedAt on Twitter",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAtFormat",
            "description": "The CreatedAtFormat on Twitter",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "text",
            "description": "The Text on Twitter",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "truncated",
            "description": "The Truncated on Twitter",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "source",
            "description": "The Source on Twitter",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "mediasCount",
            "description": "The mediasCount on Twitter",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "inReplyToStatusId",
            "description": "The InReplyToStatusId on Twitter",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "inReplyToStatusIdStr",
            "description": "The InReplyToStatusIdStr on Twitter",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "insights",
            "description": "Insights ",
            "args": [
              {
                "name": "first",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "offset",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "TwitterStatusInsight",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "inReplyToUserId",
            "description": "The InReplyToUserId on Twitter",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "inReplyToUserIdStr",
            "description": "The InReplyToUserIdStr on Twitter",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "inReplyToScreenName",
            "description": "The InReplyToScreenName on Twitter",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "isQuoteStatus",
            "description": "The IsQuoteStatus on Twitter",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "retweetCount",
            "description": "The RetweetCount on Twitter",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "favoriteCount",
            "description": "The FavoriteCount on Twitter",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "favorited",
            "description": "The Favorited on Twitter",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "retweeted",
            "description": "The Retweeted on Twitter",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "possiblySensitive",
            "description": "The PossiblySensitive on Twitter",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "lang",
            "description": "The Lang on Twitter",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "type",
            "description": "The type on Twitter",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "userId",
            "description": "The User ID on Twitter",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "lastScan",
            "description": "The Last Scan from FameUS",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "created",
            "description": "The created time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updated",
            "description": "The updated time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entity",
            "ofType": null
          },
          {
            "kind": "INTERFACE",
            "name": "ITwitterStatus",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "TwitterStatusInsight",
        "description": "A Twitter Status insight",
        "fields": [
          {
            "name": "id",
            "description": "The ID of the campaign",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resId",
            "description": "The resId on Twitter",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "retweetCount",
            "description": "The resId on Twitter",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "favoriteCount",
            "description": "The resId on Twitter",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "retweeted",
            "description": "The resId on Twitter",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "endTime",
            "description": "The endTime of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "created",
            "description": "The created time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updated",
            "description": "The updated time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entity",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "TwitterUser",
        "description": "Twitter user",
        "fields": [
          {
            "name": "id",
            "description": "The ID of the campaign",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resId",
            "description": "The ID on Twitter",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": "The Name on Twitter",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "screenName",
            "description": "The ScreenName on Twitter",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "location",
            "description": "The Location on Twitter",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": "The Description on Twitter",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "url",
            "description": "The Url on Twitter",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "followersCount",
            "description": "The FollowersCount on Twitter",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "friendsCount",
            "description": "The FriendsCount on Twitter",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "listedCount",
            "description": "The ListedCount on Twitter",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "favouritesCount",
            "description": "The FavoritesCount on Twitter",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "verified",
            "description": "The Verified on Twitter",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "statusesCount",
            "description": "The StatusesCount on Twitter",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "insights",
            "description": "Insights ",
            "args": [
              {
                "name": "first",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "offset",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "TwitterUserInsight",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "lang",
            "description": "The Lang on Twitter",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "profileBackgroundColor",
            "description": "The ProfileBackgroundColor on Twitter",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "profileBackgroundImageUrlHttps",
            "description": "The ProfileBackgroundImageUrlHttps on Twitter",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "profileImageUrlHttps",
            "description": "The ProfileImageUrlHttps on Twitter",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "created",
            "description": "The created time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updated",
            "description": "The updated time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entity",
            "ofType": null
          },
          {
            "kind": "INTERFACE",
            "name": "ITwitterUser",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "TwitterUserInsight",
        "description": "A Twitter User insight",
        "fields": [
          {
            "name": "id",
            "description": "The ID of the campaign",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resId",
            "description": "The resId on Twitter",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "followersCount",
            "description": "The resId on Twitter",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "friendsCount",
            "description": "The resId on Twitter",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "favouritesCount",
            "description": "The resId on Twitter",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "listedCount",
            "description": "The resId on Twitter",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "statusesCount",
            "description": "The resId on Twitter",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "endTime",
            "description": "The endTime of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "created",
            "description": "The created time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updated",
            "description": "The updated time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entity",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UpdateChannelInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "patch",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ChannelInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "YoutubeCampaignSummary",
        "description": "A youtube insights summary",
        "fields": [
          {
            "name": "date",
            "description": "The date of the metrics on Youtube",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "views",
            "description": "The views on Youtube",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "likes",
            "description": "The likes on Youtube",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "dislikes",
            "description": "The dislikes on Youtube",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "comments",
            "description": "The comments on Youtube",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "shares",
            "description": "The comments on Youtube",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "engagements",
            "description": "The engagements count on Youtube",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "videoCount",
            "description": "The video count on Youtube",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "averageViewPercentage",
            "description": "The averageViewPercentage on Youtube",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "averageViewDuration",
            "description": "The averageViewDuration on Youtube",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "YoutubeChannel",
        "description": "A Youtube Channel",
        "fields": [
          {
            "name": "id",
            "description": "The ID of the campaign",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resId",
            "description": "The resId on Youtube",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "etag",
            "description": "The etag on Youtube",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "kind",
            "description": "The Kind on Youtube",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "brandingSettings",
            "description": "The brandingSettings on Youtube",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "YoutubeChannelBrandingSettings",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "snippet",
            "description": "The snippet on Youtube",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "YoutubeChannelSnippet",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "insights",
            "description": "The \"insights\" instagram field",
            "args": [
              {
                "name": "first",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "offset",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "YoutubeChannelInsight",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "statistics",
            "description": "The statistics on Youtube",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "YoutubeChannelStatistics",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "topicDetails",
            "description": "The topicDetails on Youtube",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "YoutubeTopicDetails",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "created",
            "description": "The created time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updated",
            "description": "The updated time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entity",
            "ofType": null
          },
          {
            "kind": "INTERFACE",
            "name": "IYoutubeChannel",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "YoutubeChannelBrandingSettings",
        "description": "YoutubeChannelHints",
        "fields": [
          {
            "name": "channel",
            "description": "The channel",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "YoutubeChannelChannel",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "hints",
            "description": "The channel",
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "YoutubeChannelHints",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "image",
            "description": "The channel",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "YoutubeChannelImage",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "YoutubeChannelChannel",
        "description": "YoutubeChannelHints",
        "fields": [
          {
            "name": "country",
            "description": "The country",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "defaultTab",
            "description": "The defaultTab",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": "The description",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "keywords",
            "description": "The keywords",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "profileColor",
            "description": "The profileColor",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "showBrowseView",
            "description": "The showBrowseView",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "showRelatedChannels",
            "description": "The showRelatedChannels",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "title",
            "description": "The title",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "unsubscribedTrailer",
            "description": "The unsubscribedTrailer",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "YoutubeChannelHints",
        "description": "YoutubeChannelHints",
        "fields": [
          {
            "name": "property",
            "description": "The Property",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "value",
            "description": "The Value",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "YoutubeChannelImage",
        "description": "YoutubeChannelImage",
        "fields": [
          {
            "name": "bannerImageURL",
            "description": "The bannerImageURL",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "YoutubeChannelInsight",
        "description": "A Youtube Video insight",
        "fields": [
          {
            "name": "id",
            "description": "The ID of the campaign",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resId",
            "description": "The resId on Youtube",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "startTime",
            "description": "The startTime of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "endTime",
            "description": "The endTime of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "views",
            "description": "The views on Youtube",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "redViews",
            "description": "The redViews on Youtube",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "comments",
            "description": "The comments on Youtube",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "likes",
            "description": "The likes on Youtube",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "dislikes",
            "description": "The dislikes on Youtube",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "videosAddedToPlaylists",
            "description": "The videosAddedToPlaylist on Youtube",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "videosRemovedFromPlaylists",
            "description": "The videosRemovedFromPlaylist on Youtube",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "shares",
            "description": "The shares on Youtube",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "estimatedMinutesWatched",
            "description": "The estimatedMinutesWatched on Youtube",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "estimatedRedMinutesWatched",
            "description": "The estimatedRedMinutesWatched on Youtube",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "averageViewDuration",
            "description": "The averageViewDuration on Youtube",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "averageViewPercentage",
            "description": "The averageViewPercentage on Youtube",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "subscribersGained",
            "description": "The subscribersGained on Youtube",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "subscribersLost",
            "description": "The subscribersLost on Youtube",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "created",
            "description": "The created time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updated",
            "description": "The updated time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entity",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "YoutubeChannelSnippet",
        "description": "YoutubeChannelSnippet",
        "fields": [
          {
            "name": "country",
            "description": "The Country",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "customURL",
            "description": "The CustomURL",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": "The Description",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "localized",
            "description": "The Localized",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "YoutubeLocalized",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "publishedAt",
            "description": "The PublishedAt",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "thumbnails",
            "description": "The Thumbnails",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "YoutubeThumbnails",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "title",
            "description": "The Title",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "YoutubeChannelStatistics",
        "description": "YoutubeChannelStatistics",
        "fields": [
          {
            "name": "hiddenSubscriberCount",
            "description": "The HiddenSubscriberCount",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "subscriberCount",
            "description": "The SubscriberCount",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "videoCount",
            "description": "The VideoCount",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "commentCount",
            "description": "The CommentCount",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "viewCount",
            "description": "The ViewCount",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "YoutubeContentDetails",
        "description": "Content Details",
        "fields": [
          {
            "name": "caption",
            "description": "The caption",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "definition",
            "description": "The Definition",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "dimension",
            "description": "The Dimension",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "duration",
            "description": "The Duration",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "hasCustomThumbnail",
            "description": "The HasCustomThumbnail",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "licensedContent",
            "description": "The LicensedContent",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "projection",
            "description": "The Projection",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "YoutubeFileDetails",
        "description": "Content Details",
        "fields": [
          {
            "name": "fileName",
            "description": "The caption",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "YoutubeImage",
        "description": "Image Details",
        "fields": [
          {
            "name": "width",
            "description": "The width",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "height",
            "description": "The height",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "URL",
            "description": "The URL",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "YoutubeLocalized",
        "description": "Localized Details",
        "fields": [
          {
            "name": "title",
            "description": "The title",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": "The description",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "YoutubePlayer",
        "description": "Content Details",
        "fields": [
          {
            "name": "embedHTML",
            "description": "The caption",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "YoutubeProcessingDetails",
        "description": "Content Details",
        "fields": [
          {
            "name": "processingStatus",
            "description": "The caption",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "YoutubeSnippet",
        "description": "Content Details",
        "fields": [
          {
            "name": "categoryId",
            "description": "The CategoryId",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "channelId",
            "description": "The ChannelId",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "channelTitle",
            "description": "The ChannelTitle",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": "The Description",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "liveBroadcastContent",
            "description": "The LiveBroadcastContent",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "localized",
            "description": "The Localized",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "YoutubeLocalized",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "publishedAt",
            "description": "The PublishedAt",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "thumbnails",
            "description": "The Thumbnails",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "YoutubeThumbnails",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "title",
            "description": "The Title",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "YoutubeStatistics",
        "description": "Content Details",
        "fields": [
          {
            "name": "commentCount",
            "description": "The commentCount",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "dislikeCount",
            "description": "The commentCount",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "likeCount",
            "description": "The commentCount",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "viewCount",
            "description": "The commentCount",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "YoutubeStatus",
        "description": "Content Details",
        "fields": [
          {
            "name": "embeddable",
            "description": "The commentCount",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "license",
            "description": "The commentCount",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "privacyStatus",
            "description": "The commentCount",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "publicStatsViewable",
            "description": "The commentCount",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "uploadStatus",
            "description": "The commentCount",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "YoutubeThumbnails",
        "description": "Youtube Thumbnails",
        "fields": [
          {
            "name": "default",
            "description": "The default",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "YoutubeImage",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "high",
            "description": "The high",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "YoutubeImage",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "medium",
            "description": "The medium",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "YoutubeImage",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "YoutubeTopicDetails",
        "description": "Topic Details",
        "fields": [
          {
            "name": "topicCategories",
            "description": "The commentCount",
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "YoutubeVideo",
        "description": "A Youtube Video",
        "fields": [
          {
            "name": "id",
            "description": "The ID of the campaign",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resId",
            "description": "The ID on Youtube",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "etag",
            "description": "The ID of the video",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "kind",
            "description": "The kind of the video",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "contentDetails",
            "description": "The lastScan of the video",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "YoutubeContentDetails",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "fileDetails",
            "description": "The lastScan of the video",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "YoutubeFileDetails",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "processingDetails",
            "description": "The lastScan of the video",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "YoutubeProcessingDetails",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "statistics",
            "description": "The statistics of the video",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "YoutubeStatistics",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "player",
            "description": "The player of the video",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "YoutubePlayer",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "lastScan",
            "description": "The lastScan of the video",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "insights",
            "description": "The \"insights\" youtube field",
            "args": [
              {
                "name": "first",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "offset",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "YoutubeVideoInsight",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "summary",
            "description": "The insights summary of the youtube video",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "YoutubeVideoSummary",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "topicDetails",
            "description": "The topicDetails of the video",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "YoutubeTopicDetails",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "status",
            "description": "The status from FameUS",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "YoutubeStatus",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "snippet",
            "description": "The snippet from Youtube",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "YoutubeSnippet",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "created",
            "description": "The created time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updated",
            "description": "The updated time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entity",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "YoutubeVideoInsight",
        "description": "A Youtube Video insight",
        "fields": [
          {
            "name": "id",
            "description": "The ID of the campaign",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resId",
            "description": "The resId on Youtube",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resChannelId",
            "description": "The resChannelId on Youtube",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "views",
            "description": "The views on Youtube",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "redViews",
            "description": "The redViews on Youtube",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "comments",
            "description": "The comments on Youtube",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "likes",
            "description": "The likes on Youtube",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "dislikes",
            "description": "The dislikes on Youtube",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "videosAddedToPlaylists",
            "description": "The videosAddedToPlaylist on Youtube",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "videosRemovedFromPlaylists",
            "description": "The videosRemovedFromPlaylist on Youtube",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "shares",
            "description": "The shares on Youtube",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "estimatedMinutesWatched",
            "description": "The estimatedMinutesWatched on Youtube",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "estimatedRedMinutesWatched",
            "description": "The estimatedRedMinutesWatched on Youtube",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "averageViewDuration",
            "description": "The averageViewDuration on Youtube",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "averageViewPercentage",
            "description": "The averageViewPercentage on Youtube",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "subscribersGained",
            "description": "The subscribersGained on Youtube",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "subscribersLost",
            "description": "The subscribersLost on Youtube",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "startTime",
            "description": "The startTime of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "endTime",
            "description": "The endTime of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "created",
            "description": "The created time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updated",
            "description": "The updated time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entity",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "YoutubeVideoSummary",
        "description": "A Youtube Video insight",
        "fields": [
          {
            "name": "views",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "likes",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "dislikes",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "comments",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "shares",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "engagements",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "averageViewPercentage",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "averageViewDuration",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "__Directive",
        "description": "A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.\n\nIn some cases, you need to provide options to alter GraphQL's execution behavior\nin ways field arguments will not suffice, such as conditionally including or\nskipping a field. Directives provide this by describing additional information\nto the executor.",
        "fields": [
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "locations",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "ENUM",
                    "name": "__DirectiveLocation",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "args",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__InputValue",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "ENUM",
        "name": "__DirectiveLocation",
        "description": "A Directive can be adjacent to many parts of the GraphQL language, a\n__DirectiveLocation describes one such possible adjacencies.",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": [
          {
            "name": "QUERY",
            "description": "Location adjacent to a query operation.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "MUTATION",
            "description": "Location adjacent to a mutation operation.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "SUBSCRIPTION",
            "description": "Location adjacent to a subscription operation.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "FIELD",
            "description": "Location adjacent to a field.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "FRAGMENT_DEFINITION",
            "description": "Location adjacent to a fragment definition.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "FRAGMENT_SPREAD",
            "description": "Location adjacent to a fragment spread.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "INLINE_FRAGMENT",
            "description": "Location adjacent to an inline fragment.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "SCHEMA",
            "description": "Location adjacent to a schema definition.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "SCALAR",
            "description": "Location adjacent to a scalar definition.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "OBJECT",
            "description": "Location adjacent to an object type definition.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "FIELD_DEFINITION",
            "description": "Location adjacent to a field definition.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ARGUMENT_DEFINITION",
            "description": "Location adjacent to an argument definition.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "INTERFACE",
            "description": "Location adjacent to an interface definition.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "UNION",
            "description": "Location adjacent to a union definition.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ENUM",
            "description": "Location adjacent to an enum definition.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ENUM_VALUE",
            "description": "Location adjacent to an enum value definition.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "INPUT_OBJECT",
            "description": "Location adjacent to an input object type definition.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "INPUT_FIELD_DEFINITION",
            "description": "Location adjacent to an input object field definition.",
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "__EnumValue",
        "description": "One possible value for a given Enum. Enum values are unique values, not a\nplaceholder for a string or numeric value. However an Enum value is returned in\na JSON response as a string.",
        "fields": [
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "isDeprecated",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deprecationReason",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "__Field",
        "description": "Object and Interface types are described by a list of Fields, each of which has\na name, potentially a list of arguments, and a return type.",
        "fields": [
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "args",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__InputValue",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "type",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "__Type",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "isDeprecated",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deprecationReason",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "__InputValue",
        "description": "Arguments provided to Fields or Directives and the input fields of an\nInputObject are represented as Input Values which describe their type and\noptionally a default value.",
        "fields": [
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "type",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "__Type",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "defaultValue",
            "description": "A GraphQL-formatted string representing the default value for this input value.",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "__Schema",
        "description": "A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all\navailable types and directives on the server, as well as the entry points for\nquery, mutation, and subscription operations.",
        "fields": [
          {
            "name": "types",
            "description": "A list of all types supported by this server.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__Type",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "queryType",
            "description": "The type that query operations will be rooted at.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "__Type",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "mutationType",
            "description": "If this server supports mutation, the type that mutation operations will be rooted at.",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "__Type",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "subscriptionType",
            "description": "If this server support subscription, the type that subscription operations will be rooted at.",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "__Type",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "directives",
            "description": "A list of all directives supported by this server.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__Directive",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "__Type",
        "description": "The fundamental unit of any GraphQL Schema is the type. There are many kinds of\ntypes in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that\ntype. Scalar types provide no information beyond a name and description, while\nEnum types provide their values. Object and Interface types provide the fields\nthey describe. Abstract types, Union and Interface, provide the Object types\npossible at runtime. List and NonNull types compose other types.",
        "fields": [
          {
            "name": "kind",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "__TypeKind",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "fields",
            "description": null,
            "args": [
              {
                "name": "includeDeprecated",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                },
                "defaultValue": "false"
              }
            ],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "__Field",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "interfaces",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "__Type",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "possibleTypes",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "__Type",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "enumValues",
            "description": null,
            "args": [
              {
                "name": "includeDeprecated",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                },
                "defaultValue": "false"
              }
            ],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "__EnumValue",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "inputFields",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "__InputValue",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ofType",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "__Type",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "ENUM",
        "name": "__TypeKind",
        "description": "An enum describing what kind of type a given `__Type` is.",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": [
          {
            "name": "SCALAR",
            "description": "Indicates this type is a scalar.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "OBJECT",
            "description": "Indicates this type is an object. `fields` and `interfaces` are valid fields.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "INTERFACE",
            "description": "Indicates this type is an interface. `fields` and `possibleTypes` are valid fields.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "UNION",
            "description": "Indicates this type is a union. `possibleTypes` is a valid field.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ENUM",
            "description": "Indicates this type is an enum. `enumValues` is a valid field.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "INPUT_OBJECT",
            "description": "Indicates this type is an input object. `inputFields` is a valid field.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "LIST",
            "description": "Indicates this type is a list. `ofType` is a valid field.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "NON_NULL",
            "description": "Indicates this type is a non-null. `ofType` is a valid field.",
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "c",
        "description": "A campaign entity",
        "fields": [
          {
            "name": "id",
            "description": "The ID of the campaign",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": "What this human calls themselves",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "advertiser",
            "description": "The advertiser associated to the campaign",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "EntityRef",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "agency",
            "description": "The agency associated to the campaign",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "EntityRef",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "startTime",
            "description": "The start time of the campaign",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "endTime",
            "description": "The created time time of the campaign",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "state",
            "description": "The state of the campaign",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "nbDay",
            "description": "Duration of the campaign in day",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "channels",
            "description": "The channels associated to the campaign",
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "ChannelRef",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "publishers",
            "description": "The publishers associated to the campaign",
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "EntityRef",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "validations",
            "description": "The publishers associated to the campaign",
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "CampaignValidation",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "team",
            "description": "The team for the campaign",
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Member",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "formats",
            "description": "The formats for the campaign",
            "args": [
              {
                "name": "first",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "offset",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "CampaignFormat",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "trackedUrls",
            "description": null,
            "args": [
              {
                "name": "platformName",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "CampaignTrackedUrl",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "bestFormats",
            "description": "The formats for the campaign",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "BestFormats",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "created",
            "description": "The created time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updated",
            "description": "The updated time of the entity",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "summary",
            "description": "The campaign insights summary",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "Summary",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "facebookSummary",
            "description": "The Facebook insights summary",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "FacebookCampaignSummary",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "facebookAudience",
            "description": "The Facebook audience insights",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "FacebookCampaignAudience",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "facebookDaySummary",
            "description": "The Facebook days insights summary",
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "FacebookCampaignSummary",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "instagramSummary",
            "description": "The Instagram insights summary",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "InstagramCampaignSummary",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "instagramDaySummary",
            "description": "The Instagram days insights summary",
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "InstagramCampaignSummary",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "instagramAudience",
            "description": "The Instagram audience insights",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "InstagramCampaignAudience",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "youtubeSummary",
            "description": "The Youtube insights summary",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "YoutubeCampaignSummary",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "youtubeDaySummary",
            "description": "The Youtube days insights summary",
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "YoutubeCampaignSummary",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "analyticsSummary",
            "description": "The Google Analytics insights summary",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "AnalyticsCampaignSummary",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "analyticsDaySummary",
            "description": "The Google Analytics insights summary",
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "AnalyticsCampaignSummary",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "analyticsAudience",
            "description": "The Google Analytics audience insights",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "AnalyticsCampaignAudience",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "appAdSummary",
            "description": "The App Ads insights summary",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "AppAdCampaignSummary",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "appAdDaySummary",
            "description": "The  App Ads days insights summary",
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "AppAdCampaignSummary",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "appPostSummary",
            "description": "The App Posts insights summary",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "AppPostCampaignSummary",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "appPostDaySummary",
            "description": "The  App Posts days insights summary",
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "AppPostCampaignSummary",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "appPushSummary",
            "description": "The App Pushs insights summary",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "AppPushCampaignSummary",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "appPushDaySummary",
            "description": "The App Pushs days insights summary",
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "AppPushCampaignSummary",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "appAudience",
            "description": "The App audience insights",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "AppCampaignAudience",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "trackedUrlsSummary",
            "description": null,
            "args": [
              {
                "name": "platformName",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "TrackedUrlCampaignSummary",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "trackedUrlsDaySummary",
            "description": null,
            "args": [
              {
                "name": "platformName",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "TrackedUrlCampaignSummary",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entity",
            "ofType": null
          },
          {
            "kind": "INTERFACE",
            "name": "ICampaign",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      }
    ],
    "directives": [
      {
        "name": "deprecated",
        "description": "Marks an element of a GraphQL schema as no longer supported.",
        "locations": [
          "FIELD_DEFINITION",
          "ENUM_VALUE"
        ],
        "args": [
          {
            "name": "reason",
            "description": "Explains why this element was deprecated, usually also including a suggestion\nfor how to access supported similar data. Formatted in\n[Markdown](https://daringfireball.net/projects/markdown/).",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": "\"No longer supported\""
          }
        ]
      },
      {
        "name": "include",
        "description": "Directs the executor to include this field or fragment only when the `if` argument is true.",
        "locations": [
          "FIELD",
          "FRAGMENT_SPREAD",
          "INLINE_FRAGMENT"
        ],
        "args": [
          {
            "name": "if",
            "description": "Included when true.",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "defaultValue": null
          }
        ]
      },
      {
        "name": "skip",
        "description": "Directs the executor to skip this field or fragment when the `if` argument is true.",
        "locations": [
          "FIELD",
          "FRAGMENT_SPREAD",
          "INLINE_FRAGMENT"
        ],
        "args": [
          {
            "name": "if",
            "description": "Skipped when true.",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "defaultValue": null
          }
        ]
      }
    ]
  }
};
