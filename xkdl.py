"""
星空代理 v1.0

任务：签到

export xingkong="账户1@密码" 多账户 & 分割

cron: 5 0,9 * * *
const $ = new Env("星空代理");
"""

import os
import re
from datetime import datetime
import requests
from sendNotify import send

try:
    xingkong = os.environ["xingkong"]
    headers = {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Origin': 'http://www.xkdaili.com',
        'Referer': 'https://www.xkdaili.com/',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Edg/121.0.0.0',
        'X-Requested-With': 'XMLHttpRequest',
    }
    # 用于拼接
    msg = ""
    params = {
        'action': 'user_receive_point',
    }
    # 按照&分隔多个账户
    accounts = xingkong.split("&")
    for i in accounts:
        up = i.split("@")
        data = {
            "username": up[0],
            "password": up[1],
            "remember": 0
        }
        try:
            aa = requests.post("https://www.xkdaili.com/tools/submit_ajax.ashx?action=user_login&site_id=1", headers=headers,
                               data=data)
            ck = aa.cookies
            asp = re.findall(r"ASP\.NET_SessionId=(\w+)", str(ck))
            dt = re.findall(r"dt_cookie_user_name_remember=(\w+=\w+)", str(ck))
            cookies = {
                "ASP.NET_SessionId": asp[0],
                "dt_cookie_user_name_remember": dt[0]
            }

            data = {
                'type': 'login',
            }

            response = requests.post('https://www.xkdaili.com/tools/submit_ajax.ashx?action=user_receive_point', cookies=cookies, headers=headers, data=data)
            txt = response.json()
            print("星空签到 ", txt['msg'])
            msg += f"账户 {up[0]} 星空签到 {txt['msg']}\n"
        except Exception as e:
            print(f"账户 {up[0]} 星空签到异常 {str(e)}")
            msg += f"账户 {up[0]} 星空签到异常 {str(e)}\n"
    # 执行完毕发送通知
    title = "🔁星空代理-签到"
    msg = f"⏰{str(datetime.now())[:19]}\n" + msg
    send(title, msg)
except Exception as e:
    print("⚠️星空代理签到失败,失败原因 ", str(e))
    if str(e) == "list index out of range":
        title = "🔁星空代理-签到"
        msg = f"⏰{str(datetime.now())[:19]}\n" + f"⚠️星空代理签到失败,失败原因 {e}"
        send(title, msg)
