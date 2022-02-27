/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const searchTestWordSets = /* GraphQL */ `
  query SearchTestWordSets(
    $filter: SearchableTestWordSetFilterInput
    $sort: [SearchableTestWordSetSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableTestWordSetAggregationInput]
  ) {
    searchTestWordSets(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        name
        createdAt
        updatedAt
        owner
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getTestWordSet = /* GraphQL */ `
  query GetTestWordSet($id: ID!) {
    getTestWordSet(id: $id) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listTestWordSets = /* GraphQL */ `
  query ListTestWordSets(
    $filter: ModelTestWordSetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTestWordSets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
