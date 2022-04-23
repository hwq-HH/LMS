import React from 'react'
import { withRouter, useHistory } from 'react-router-dom'

import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import "./Login.css";

function Login() {
    // const history = useHistory();
    // const onFinish = (values) => {
    //     fetch(config.url + "api/v1/logon",
    //         {
    //             method: "post",
    //             headers: {
    //                 "Content-Type": "application/json;charset=UTF-8",
    //             },
    //             body: JSON.stringify({
    //                 username: values.username,
    //                 password: values.password
    //             }),
    //         })
    //         .then((response) => response.json())
    //         .then((res) => {
    //             if (res?.result?.code === 200 || res?.result?.code === 206) {
    //                 cookie.save("AuthorizationCode", res?.result?.data, { path: '/' })
    //                 cookie.save("username", values.username, { path: '/' })

    //                 // #region 
    //                 //   const cookies = cookie.loadAll()
    //                 //   if (cookies?.username) {
    //                 //     ClearCookie(['username', 'password', 'role', 'token'])
    //                 //   }
    //                 //   if (this.state.usercheckbox === true) {
    //                 //     SaveCookie({
    //                 //       username: this.state.username,
    //                 //       token: result?.data?.token,
    //                 //       password: this.state.password,
    //                 //       role: result?.data?.role
    //                 //     })
    //                 //   } else {
    //                 //     ClearCookie(['password'])
    //                 //     SaveCookie({
    //                 //       username: this.state.username,
    //                 //       token: result?.data?.token,
    //                 //       role: result?.data?.role
    //                 //     })
    //                 //   }
    //                 // #endregion
    //                 if (res?.result?.code === 206) {
    //                     message.error(res?.result?.message);
    //                 }
    //                 history.push("admin/systemManagement/LDAP");
    //             }
    //             else {
    //                 message.error("登录失败！" + res?.result?.message)
    //             }
    //         })
    //         .catch(function (error) {
    //             message.error("登录失败！" + error)
    //         });
    // };


    return (
        <div className="login">
            <header className="login-header">登录页面</header>
            <section className="login-content">
                <div>
                    <Form
                        name="normal_login"
                        className="login-form"
                        // onFinish={onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your Username!' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                            >
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </section>
        </div>
    )
}

export default withRouter(Login)
