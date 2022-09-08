import React from 'react'
import styles from './contactsection.module.css'
import Form from 'antd/es/form/Form'
import Input from 'antd/lib/input/Input'
import { Button } from '@mui/material'
import TextArea from 'antd/lib/input/TextArea'
import { UserOutlined, MailOutlined } from '@ant-design/icons'
import githubIcon from '../../../Images/githubIcon2.png'
import linkedinIcon from '../../../Images/linkedinIcon2.png'
import youtubeIcon from '../../../Images/youtubeIcon2.png'



export default function ContactSection() {



    return (



        <div className={styles.mainBannerContainer}>

            <div className={styles.formContainer}>

                <h1>Contact</h1>

                <Form
                    method="post"
                    layout="vertical"
                >

                    <Form.Item
                        label="Name"
                        rules={[{ required: true, message: `Please enter your name.` }]}
                        name="name"
                    >
                        <Input
                            placeholder="Name"
                            prefix={<UserOutlined className="site-form-item-icon" />}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        rules={[{ required: true, type: `email`, message: `Please enter your email.` }]}
                        name="email"
                    >
                        <Input
                            placeholder="Your Email"
                            prefix={<MailOutlined className="site-form-item-icon" />}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Message"
                        rules={[{ required: true, message: `Please enter your message.` }]}
                        name="message"
                    >
                        <TextArea
                            placeholder="Your Message"
                            rows={5}
                            style={{resize: 'none'}}
                            
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button variant="contained" className={styles.button}>
                            Send
                        </Button>
                    </Form.Item>
                </Form>

            </div>

            <div className={styles.socialMediaRow}>
                <img className={styles.socialMediaIcon} src={githubIcon} 
                onClick={() => {window.open("https://github.com/clawplusstacker")}}/>
                <img className={styles.socialMediaIcon} src={linkedinIcon} 
                onClick={() => window.open("https://www.linkedin.com/in/colby-beach-57b66017b/")}/>
                <img className={styles.socialMediaIcon} src={youtubeIcon} 
                onClick={() => window.open("https://www.youtube.com/c/Claw100Productions1")}/>
            </div>



        </div>
    )
}
