# TODO-LIST with reactjs & Tailwind

## Explanation to use

## Explanation of code

## Learning purpose

### JS Cookies vs local storage vs Session

- Store data inside our browser. 
- Loacl storage and Session Storage have lot of similarities rather than Cookies.
- Data storage LS > CS only available to one tab. L -> we need to delete ourself, no timing. 
- C> Browser and server, Sent with request 

![Probs classcomp](public/asset/cls_storedata.png)
![Probs classcomp](public/asset/app_console.PNG)

- Inside something inside - localStorage.setItem(key, value) -> key get remove something, value to get something.
- loaclStoreage('name', 'Lak') -> console.log(loacalStorage.getItem('name)) -> lak
- localStorage.removeItem('name') -> delete from storage.
- session is same sessionStorage.setItem.
- Cookies: document.cookie = 'name=Lak; expires=' + new Date(2022, 3, 1).toUTCString(); save each new cookie on 
- separte. console.log(document.cookie)

## React useLocalStorage

- https://usehooks.com/page/3

![Probs classcomp](public/asset/Storage_working.PNG)

## Extend with Time and Date



