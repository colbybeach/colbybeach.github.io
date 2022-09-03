import React from 'react'
import styles from './githubsection.module.css'
import { Table, Tag } from 'antd';


export default function GithubSection() {
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
        },
        {
          title: 'Languages',
          dataIndex: 'languages',
          key: 'languages',
          render: (_, { languages }) => (
            <>
              {languages.map((tag) => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
      
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          ),
        },
        {
          title: 'Stars',
          dataIndex: 'stars',
          key: 'stars',
        },
        {
          title: 'Date Created',
          key: 'created',
          dataIndex: 'created',
        },
        {
          title: 'Last Updated',
          key: 'updated',
          dataIndex: 'updated',
        },
      ];
      const data = [
        {
          key: '1',
          name: 'John Brown',
          description:  "Hello this is a test description!",
          languages: ['nice', 'developer'],
          stars: 0,
          created: '4/12/2021',
          updated: '8/29/2022', 
        },
        {
          key: '2',
          name: 'John Brown',
          description:  "Hello this is a test description!",
          languages: ['nice', 'developer'],
          stars: 0,
          created: '4/12/2021',
          updated: '8/29/2022', 
        },
        {
          key: '3',
          name: 'John Brown',
          description:  "Hello this is a test description!",
          languages: ['nice', 'developer'],
          stars: 0,
          created: '4/12/2021',
          updated: '8/29/2022', 
        },
      ];
      



    return (
        <div className={styles.mainContainer}>

            <h1>GITHUB REPOS</h1>

            <Table columns={columns} dataSource={data} />

        </div>
    )
}
