<template>
  <div>
    <h1>Dashboard</h1>
    <v-card
      elevation="2"
      class="mx-auto my-12"
      max-width="374"
    >
      <v-card-title>TestWordSet</v-card-title>
      <v-card-actions>
        <v-form>
          <v-text-field
            label="TestWordSet name"
            v-model="name"
          ></v-text-field>
          <v-btn
            @click="create_TestWordSet"
          >
            createTestWordSet
          </v-btn>
        </v-form>
      </v-card-actions>
      <v-list-item
        v-for="item in test_wordset"
        :key="item.id"
      >
        <v-list-item-content>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-btn
        @click="search_TestWordSet"
      >
        searchTestWordSets
      </v-btn>
    </v-card>
  </div>
</template>

<script>
import { API } from 'aws-amplify';
import { createTestWordSet } from '@/graphql/mutations';
import { searchTestWordSets } from '@/graphql/queries';

export default {
  name: "Dashboard",
  data() {
    return {
      name: '',
      test_wordset: [],
    };
  },
  methods: {
    async create_TestWordSet() {
      const { name } = this;
      if (!name) return;
      const test_wordset = { name };
      this.test_wordset = [ ...this.test_wordset, test_wordset ];
      await API.graphql({
        query: createTestWordSet,
        variables: { input: test_wordset },
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      });
      this.name = '';
    },
    async search_TestWordSet() {
      const test_wordset = await API.graphql({
        query: searchTestWordSets,
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      });
      console.log(test_wordset);
      //this.test_wordset = test_wordset.data.searchTestWordSets.items;
    }
  }
}
</script>
