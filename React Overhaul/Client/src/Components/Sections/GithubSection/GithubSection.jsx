import React, { useState } from 'react'
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
          title: 'Language',
          dataIndex: 'language',
          key: 'language',
          align: 'center',
          // render: (_, { language }) => (
          //   <>
          //     {language.map((tag) => {
          //       let color = tag.length > 5 ? 'geekblue' : 'green';
      
          //       return (
          //         <Tag color={color} key={tag}>
          //           {tag.toUpperCase()}
          //         </Tag>
          //       );
          //     })}
          //   </>
          // ),
        },
        {
          title: 'Stars',
          dataIndex: 'stargazers_count',
          key: 'stargazers_count',
          align: 'center',
        },
        {
          title: 'Date Created',
          key: "created_at",
          dataIndex: "created_at",
          align: 'center',
          render: (record) => (
            <p>
                {new Date(record).toLocaleDateString()}
            </p>
          ),
        },
        {
          title: 'Last Updated',
          key: "pushed_at",
          dataIndex: "pushed_at",
          align: 'center',
          render: (record) => (
            <p>
                {new Date(record).toLocaleDateString()}
            </p>
          ),
        },
        {
          title: "Link",
          dataIndex: 'html_url',
          key: 'html_url',
          align: 'center',
          render: (record) => (
            <a href={record} target={"_blank"}>More Info...</a>
          ),
        },
      ];
 
      const [data, setData] = useState([]);
      

      fetch('https://api.github.com/users/clawplusstacker/repos')
        .then(response => response.json())
        .then(data => {
          setData(data) 
        })
        .catch(error => console.error(error))


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
