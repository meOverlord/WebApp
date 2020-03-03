import gql from 'graphql-tag';

export
	const CreateCLient = gql`
mutation CreateCLient($name: String!) {
    createClient( input: {
      name : $name
    }) {
      _id
      name
    }
  }
}
`;

export
	const myClientsQuery = gql`
query clients() {
    createClient {
      _id
      name
    }
  }
}
`;
