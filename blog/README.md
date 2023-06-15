


# Blog Project 




## Technologies

Reactjs ,  Typescript , Tailwindcss  , expressjs , mongodb ,
<p align="left"> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/> </a> <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a> </p>



یک پروژه بلاگ که کاربر قابلیت لاگین کردن - ایجاد پست رو داره هر پست با اسم نویسنده اون پست نمایش داده میشه . 

همچنین هر نویسنده پست می تونه پست خودش رو ویرایش کنه اما اجازه ویرایش پست دیگران رو نداره . 

قابلیت کامنت گذاشتن و لایکن کردن همچنین share کردن هر پست به وسیله کاربران . 

قابلیت follow کردن و ارسال notifaction بار اعلام اینکه کاربری شما را فالو کرده .


# directory : 

2 فولدر وجود داره به اسم های clinet و server که درون فولدر clinet فایل های مربوط به فرانت هست 

درون فولدر server فایل های مربوط به server . سرور به وسیله nodemon روی port 2023 لوکال ران میشه . 

در بخش فرانت reactjs به وسیله vitejs +typescript + swc ساخته شده . 

که با دستور `npm run dev` ران خواهد شد .

درون پوشه client فایل بندی ها مون به صورت زیر هست : 
<div align='center'>
  <img src='https://github.com/mosenn/MERN/assets/91747908/81ba2f5d-4718-485e-9f99-2491f2f9a4f2' alt='blog with react and expressjs'/>
</div>
  
# package.json 

پکیج های که سمت فرانت پروژه استفاده میشه : 

```javascript 
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^14.0.0",
    "@testing-library/user-event": "^14.4.3",
    "axios": "^1.4.0",
    "cloudinary-react": "^1.8.1",
    "jsdom": "^22.1.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.12.1"
  },
```

و همینطور Devdependencies : 
```javascript
  "devDependencies": {
    "@types/react": "^18.0.37",
    "@types/react-dom": "^18.0.11",
    "@typescript-eslint/eslint-plugin": "^5.59.0",
    "@typescript-eslint/parser": "^5.59.0",
    "@vitejs/plugin-react-swc": "^3.0.0",
    "autoprefixer": "^10.4.14",
    "eslint": "^8.38.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.3.4",
    "postcss": "^8.4.24",
    "tailwindcss": "^3.3.2",
    "typescript": "^5.0.2",
    "vite": "^4.3.9",
    "vitest": "^0.32.0"
  } 
```

# App.tsx

درون فایل app امدیم route بندی ها رو انجام دادیم به وسیله react-router-dom 

کامپونت ها import شده و با توجه به نیاز پروژه route بندی ها انجام شده . 
```javascript 
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
```

# component : 

در فولدر `component` کامپونت های مورد نیاز و تکرار شدنی  قرار داده شده . 


<div algin='center'>
<img src='https://github.com/mosenn/MERN/assets/91747908/0a083629-ef75-4ff3-8527-c0c621ba6f70' alt='react component'/>
</div>

درون `toast` یک پیام به ما نشون میده . و می تونیم از این کامپونت هر جا خواستیم استفاده کنیم . 

درون پروژه در بخش های login , register از این componet استفاده کردیم . 

درون `header` که همونظور که از اسمش مشخص هست header سایت رو قرار دادیم و در app.tsx قرار دادیم 

به این دلیل که  header رو درون تمای بخش های پروژه می خوایم که باشه . 

کامپونت داریم به اسم `button`  که دکمه های سایت ما رو تشکیل میده و هر جا نیاز به `button` درون پروژه باشه 

از کامپونت `button` استفاده می کنیم .


# pages

<div algin='center'>
<img src='https://github.com/mosenn/MERN/assets/91747908/d1c78c81-b02a-4f64-a862-cddcef440fac' alt='react component'/>
</div>

درون فولدر `pages` در واقع صحفات وب رو داریم .  

درون `home` پست ها رو نشون میدیم 

 در `register` کاربر می تونه اکانت خودش رو بسازه 
 
 در `login` کاربر می تونه با اکانتی که ساخته لاگین کنه در نهایت به صحفه `home` ریداریکت میشه 
 
 
 # api 



<div algin='center'>
<img src='https://github.com/mosenn/MERN/assets/91747908/6f19569b-0a6b-4d7b-a0ad-39c04a37a463' alt='reactjs api'/>
</div>



درون فولدر `api` کار های مروبط به api رو انجام میدیم  . 

مثل ارسال کاربر ثبت نام شده به server یا گرفتن مشخصات کاربری که لاگین شده همینطور اپلود عکس پرفایل 

