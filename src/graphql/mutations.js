/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTestWordSet = /* GraphQL */ `
  mutation CreateTestWordSet(
    $input: CreateTestWordSetInput!
    $condition: ModelTestWordSetConditionInput
  ) {
    createTestWordSet(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateTestWordSet = /* GraphQL */ `
  mutation UpdateTestWordSet(
    $input: UpdateTestWordSetInput!
    $condition: ModelTestWordSetConditionInput
  ) {
    updateTestWordSet(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteTestWordSet = /* GraphQL */ `
  mutation DeleteTestWordSet(
    $input: DeleteTestWordSetInput!
    $condition: ModelTestWordSetConditionInput
  ) {
    deleteTestWordSet(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
