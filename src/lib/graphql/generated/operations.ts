/* eslint-disable @typescript-eslint/ban-types */
import type { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo?: Maybe<Todo>;
  deleteTodo: Todo;
  updateTodo?: Maybe<Todo>;
};


export type MutationCreateTodoArgs = {
  description: Scalars['String'];
  title: Scalars['String'];
};


export type MutationDeleteTodoArgs = {
  id: Scalars['String'];
};


export type MutationUpdateTodoArgs = {
  description: Scalars['String'];
  id: Scalars['String'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  Todos: Array<Todo>;
  todos: Array<Todo>;
};

export type Todo = {
  __typename?: 'Todo';
  description: Scalars['String'];
  id: Scalars['String'];
  title: Scalars['String'];
};

export type GetTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTodosQuery = { __typename?: 'Query', todos: Array<{ __typename?: 'Todo', id: string, title: string, description: string }> };

export type CreateTodoMutationVariables = Exact<{
  title: Scalars['String'];
  description: Scalars['String'];
}>;


export type CreateTodoMutation = { __typename?: 'Mutation', createTodo?: { __typename?: 'Todo', id: string, title: string, description: string } | null };

export type UpdateTodoMutationVariables = Exact<{
  id: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
}>;


export type UpdateTodoMutation = { __typename?: 'Mutation', updateTodo?: { __typename?: 'Todo', id: string, title: string, description: string } | null };

export type DeleteTodoMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteTodoMutation = { __typename?: 'Mutation', deleteTodo: { __typename?: 'Todo', id: string, title: string, description: string } };


export const GetTodosDocument = gql`
    query GetTodos {
  todos {
    id
    title
    description
  }
}
    `;
export const CreateTodoDocument = gql`
    mutation CreateTodo($title: String!, $description: String!) {
  createTodo(title: $title, description: $description) {
    id
    title
    description
  }
}
    `;
export const UpdateTodoDocument = gql`
    mutation UpdateTodo($id: String!, $title: String!, $description: String!) {
  updateTodo(id: $id, title: $title, description: $description) {
    id
    title
    description
  }
}
    `;
export const DeleteTodoDocument = gql`
    mutation DeleteTodo($id: String!) {
  deleteTodo(id: $id) {
    id
    title
    description
  }
}
    `;
export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
export function getSdk<C>(requester: Requester<C>) {
  return {
    GetTodos(variables?: GetTodosQueryVariables, options?: C): Promise<GetTodosQuery> {
      return requester<GetTodosQuery, GetTodosQueryVariables>(GetTodosDocument, variables, options);
    },
    CreateTodo(variables: CreateTodoMutationVariables, options?: C): Promise<CreateTodoMutation> {
      return requester<CreateTodoMutation, CreateTodoMutationVariables>(CreateTodoDocument, variables, options);
    },
    UpdateTodo(variables: UpdateTodoMutationVariables, options?: C): Promise<UpdateTodoMutation> {
      return requester<UpdateTodoMutation, UpdateTodoMutationVariables>(UpdateTodoDocument, variables, options);
    },
    DeleteTodo(variables: DeleteTodoMutationVariables, options?: C): Promise<DeleteTodoMutation> {
      return requester<DeleteTodoMutation, DeleteTodoMutationVariables>(DeleteTodoDocument, variables, options);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;