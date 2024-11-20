import React from 'react';
// Importing the original mapper + our components according to the Docusaurus doc
import MDXComponents from '@theme-original/MDXComponents';
import APITable from '@site/src/components/APITable';
import Button from '@site/src/components/Button';
import DocCardList from '@theme/DocCardList';

export default {
  // Reusing the default mapping
  ...MDXComponents,
  APITable,
  Button,
  DocCardList
};