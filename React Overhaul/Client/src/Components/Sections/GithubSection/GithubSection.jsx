import React from 'react'
import styles from './githubsection.module.css'
import { Table, Tag } from 'antd';


export default function GithubSection() {
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          align: 'center',
          fixed: 'left'
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
          align: 'center',
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
          align: 'center',
        },
        {
          title: 'Date Created',
          key: 'created',
          dataIndex: 'created',
          align: 'center',
        },
        {
          title: 'Last Updated',
          key: 'updated',
          dataIndex: 'updated',
          align: 'center',
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

            <Table 
              columns={columns} 
              dataSource={data} 
              scroll={{
                x: 1000,
              }}            
            />

        </div>
    )
}
