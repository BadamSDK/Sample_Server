#!-*- coding:utf8 -*-
import requests

def login_verify_token(appid, token):
    r = requests.post('http://test.open.badambiz.com/api/user/verify_token/', data = dict(appid = appid, token = token))
    return r.json()

if __name__ == '__main__':
    appid = '' #填写游戏APPID
    token = '' #填写游戏token
    rs = login_verify_token(appid, token)
    print rs
