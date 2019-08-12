(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-account-user-account-module"],{

/***/ "./src/app/user/account/components/account-page/styles/user-account-page.styles.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/user/account/components/account-page/styles/user-account-page.styles.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-user-account-page {\n  display: block;\n  min-height: calc(100vh - 3.5rem);\n  padding-bottom: 6rem; }\n  app-user-account-page .account-title {\n    padding-top: 2rem;\n    margin-bottom: 2rem;\n    color: #1e1e1e;\n    font-size: 1.8rem;\n    font-weight: 900;\n    letter-spacing: 0.25rem; }\n  app-user-account-page .account-sidebar {\n    border: 2px solid #9e9e9e; }\n  @media (max-width: 991.98px) {\n      app-user-account-page .account-sidebar {\n        margin-bottom: 2rem; } }\n  app-user-account-page .account-sidebar .user-info {\n      padding: 1rem;\n      text-align: center; }\n  app-user-account-page .account-sidebar .user-info .user-img-outer {\n        margin: 0 20% 1rem; }\n  app-user-account-page .account-sidebar .user-info .user-img-outer .user-img-wrapper {\n          border-radius: 50%; }\n  app-user-account-page .account-sidebar .user-info .user-img-outer .user-img-wrapper .user-img {\n            width: 100%;\n            border-radius: 50%; }\n  app-user-account-page .account-sidebar .user-info .user-name {\n        display: block;\n        color: #1e1e1e;\n        font-size: 0.9rem;\n        font-weight: 600; }\n  app-user-account-page .account-sidebar .user-info .user-handle {\n        display: block;\n        color: #9e9e9e;\n        font-size: 0.9rem;\n        font-weight: 500; }\n  app-user-account-page .account-sidebar .user-actions.list-group .list-group-item {\n      padding-top: 1.5rem;\n      padding-bottom: 1.5rem;\n      display: flex;\n      justify-content: space-between;\n      align-items: center; }\n  app-user-account-page .account-sidebar .user-actions.list-group .list-group-item .badge {\n        color: #FFFFFF;\n        background-color: #9e9e9e; }\n  app-user-account-page .account-sidebar .user-actions.list-group .list-group-item.active {\n        background-color: #9e9e9e;\n        border-color: #9e9e9e;\n        color: #FFFFFF; }\n  app-user-account-page .account-sidebar .user-actions.list-group .list-group-item.active .badge {\n          color: #9e9e9e;\n          background-color: #FFFFFF; }\n  app-user-account-page .account-sidebar .user-actions.list-group .list-group-item.disabled {\n        opacity: 0.6; }\n  app-user-account-page .account-sidebar .user-actions.list-group .list-group-item-action {\n      color: #9e9e9e;\n      font-size: 1.1rem;\n      font-weight: 500;\n      cursor: pointer; }\n  app-user-account-page .no-orders-message {\n    color: #9e9e9e;\n    text-align: center; }\n  app-user-account-page .user-orders .orders-title {\n    background-color: #9013fe;\n    color: #FFFFFF;\n    font-size: 1.4rem;\n    font-weight: 800;\n    letter-spacing: 0.15rem;\n    margin-bottom: 2rem;\n    padding: 1rem; }\n  app-user-account-page .user-orders .orders-table-list {\n    border-collapse: separate;\n    border-spacing: 0 0.75rem; }\n  app-user-account-page .user-orders .orders-table-list caption {\n      color: #9e9e9e;\n      font-size: 0.8rem; }\n  app-user-account-page .user-orders .orders-table-list thead th {\n      border: none;\n      vertical-align: middle;\n      color: #9e9e9e;\n      font-size: 0.9rem;\n      font-weight: 600;\n      padding-bottom: 0;\n      padding-top: 0; }\n  app-user-account-page .user-orders .orders-table-list .order-item {\n      color: #9e9e9e;\n      border-color: #3f3f3f; }\n  app-user-account-page .user-orders .orders-table-list .order-item:hover {\n        color: #3f3f3f;\n        border-color: #1e1e1e; }\n  app-user-account-page .user-orders .orders-table-list .order-item th,\n      app-user-account-page .user-orders .orders-table-list .order-item td {\n        vertical-align: middle;\n        border-bottom-width: 1px;\n        border-bottom-style: solid;\n        border-top-width: 1px;\n        border-top-style: solid;\n        border-color: inherit;\n        padding: 0.75rem; }\n  app-user-account-page .user-orders .orders-table-list .order-item th:first-child,\n        app-user-account-page .user-orders .orders-table-list .order-item td:first-child {\n          border-left-width: 1px;\n          border-left-style: solid; }\n  app-user-account-page .user-orders .orders-table-list .order-item th:last-child,\n        app-user-account-page .user-orders .orders-table-list .order-item td:last-child {\n          border-right-width: 1px;\n          border-right-style: solid; }\n  app-user-account-page .user-orders .orders-table-list .order-item .order-products-preview {\n        min-width: calc(((0.75rem * 2) + (50px * 3)) - (2rem * 2)); }\n  app-user-account-page .user-orders .orders-table-list .order-item .order-products-preview .order-products-list {\n          display: flex;\n          justify-content: center;\n          align-items: center; }\n  app-user-account-page .user-orders .orders-table-list .order-item .order-products-preview .order-product-item {\n          width: 50px; }\n  app-user-account-page .user-orders .orders-table-list .order-item .order-products-preview .order-product-item:not(:first-child) {\n            margin-left: -2rem; }\n  app-user-account-page .user-orders .orders-table-list .order-item .order-products-preview .order-product-item .product-img-wrapper {\n            border-radius: 50%; }\n  app-user-account-page .user-orders .orders-table-list .order-item .order-products-preview .order-product-item .product-img-wrapper .product-img {\n              width: 100%;\n              border-radius: 50%; }\n  app-user-account-page .user-orders .orders-table-list .order-item .order-products-preview.big-order .order-product-item:last-child {\n          position: relative; }\n  app-user-account-page .user-orders .orders-table-list .order-item .order-products-preview.big-order .order-product-item:last-child::after {\n            content: \"+\" attr(data-products-length);\n            position: absolute;\n            top: 0;\n            left: 0;\n            background-color: rgba(144, 19, 254, 0.7);\n            color: #FFFFFF;\n            font-weight: 500;\n            width: 50px;\n            height: 50px;\n            border-radius: 50%;\n            text-align: center;\n            line-height: 50px; }\n  app-user-account-page .user-orders .orders-table-list .order-item .order-item-action-btn {\n        color: #9013fe;\n        font-size: 1rem;\n        font-weight: 500;\n        letter-spacing: 0.1rem;\n        transition: color .5s;\n        font-size: 0.9rem;\n        letter-spacing: normal; }\n  app-user-account-page .user-orders .orders-table-list .order-item .order-item-action-btn:hover:not([disabled]), app-user-account-page .user-orders .orders-table-list .order-item .order-item-action-btn:active:not([disabled]), app-user-account-page .user-orders .orders-table-list .order-item .order-item-action-btn.active:not([disabled]), app-user-account-page .user-orders .orders-table-list .order-item .order-item-action-btn:focus:not([disabled]), app-user-account-page .user-orders .orders-table-list .order-item .order-item-action-btn.focus:not([disabled]) {\n          color: #7601dd; }\n  app-user-account-page .user-orders .orders-table-list .order-item .order-item-action-btn[disabled] {\n          cursor: not-allowed;\n          opacity: .5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9hY2NvdW50L2NvbXBvbmVudHMvYWNjb3VudC1wYWdlL3N0eWxlcy9DOlxcVXNlcnNcXGFzbWl0XFxPbmVEcml2ZVxcRGVza3RvcFxcYW5ndWxhci1zaXRlLXRlbXBsYXRlXFxhbmd1bGFyLXNpdGUtdGVtcGxhdGUtMS4xLjAvc3JjXFxhcHBcXHVzZXJcXGFjY291bnRcXGNvbXBvbmVudHNcXGFjY291bnQtcGFnZVxcc3R5bGVzXFx1c2VyLWFjY291bnQtcGFnZS5zdHlsZXMuc2NzcyIsInNyYy9hcHAvdXNlci9hY2NvdW50L2NvbXBvbmVudHMvYWNjb3VudC1wYWdlL3N0eWxlcy9DOlxcVXNlcnNcXGFzbWl0XFxPbmVEcml2ZVxcRGVza3RvcFxcYW5ndWxhci1zaXRlLXRlbXBsYXRlXFxhbmd1bGFyLXNpdGUtdGVtcGxhdGUtMS4xLjAvc3JjXFxhcHBcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC91c2VyL2FjY291bnQvY29tcG9uZW50cy9hY2NvdW50LXBhZ2Uvc3R5bGVzL0M6XFxVc2Vyc1xcYXNtaXRcXE9uZURyaXZlXFxEZXNrdG9wXFxhbmd1bGFyLXNpdGUtdGVtcGxhdGVcXGFuZ3VsYXItc2l0ZS10ZW1wbGF0ZS0xLjEuMC9ub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcbWl4aW5zXFxfYnJlYWtwb2ludHMuc2NzcyIsInNyYy9hcHAvdXNlci9hY2NvdW50L2NvbXBvbmVudHMvYWNjb3VudC1wYWdlL3N0eWxlcy9DOlxcVXNlcnNcXGFzbWl0XFxPbmVEcml2ZVxcRGVza3RvcFxcYW5ndWxhci1zaXRlLXRlbXBsYXRlXFxhbmd1bGFyLXNpdGUtdGVtcGxhdGUtMS4xLjAvc3JjXFxhcHBcXHN0eWxlc1xcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZUFBYztFQUNkLGlDQUE2QztFQUM3QyxxQkFBb0IsRUF3TnJCO0VBM05EO0lBTUksa0JBQWlCO0lBQ2pCLG9CQUFtQjtJQUNuQixlQ1RXO0lEVVgsa0JBQWlCO0lBQ2pCLGlCQUFnQjtJQUNoQix3QkFBdUIsRUFDeEI7RUFaSDtJQWVJLDBCQ2JVLEVEdUZYO0VFbEJDO01GdkVKO1FBa0JNLG9CQUFtQixFQXVFdEIsRUFBQTtFQXpGSDtNQXNCTSxjQUFhO01BQ2IsbUJBQWtCLEVBNEJuQjtFQW5ETDtRQTBCUSxtQkFBa0IsRUFVbkI7RUFwQ1A7VUE2QlUsbUJBQWtCLEVBTW5CO0VBbkNUO1lBZ0NZLFlBQVc7WUFDWCxtQkFBa0IsRUFDbkI7RUFsQ1g7UUF1Q1EsZUFBYztRQUNkLGVDekNPO1FEMENQLGtCQUFpQjtRQUNqQixpQkFBZ0IsRUFDakI7RUEzQ1A7UUE4Q1EsZUFBYztRQUNkLGVDN0NNO1FEOENOLGtCQUFpQjtRQUNqQixpQkFBZ0IsRUFDakI7RUFsRFA7TUF1RFEsb0JBQW1CO01BQ25CLHVCQUFzQjtNQUN0QixjQUFhO01BQ2IsK0JBQThCO01BQzlCLG9CQUFtQixFQXFCcEI7RUFoRlA7UUE4RFUsZUM3REs7UUQ4REwsMEJDN0RJLEVEOERMO0VBaEVUO1FBbUVVLDBCQ2pFSTtRRGtFSixzQkNsRUk7UURtRUosZUNwRUssRUQwRU47RUEzRVQ7VUF3RVksZUN0RUU7VUR1RUYsMEJDeEVHLEVEeUVKO0VBMUVYO1FBOEVVLGFBQVksRUFDYjtFQS9FVDtNQW1GUSxlQ2pGTTtNRGtGTixrQkFBaUI7TUFDakIsaUJBQWdCO01BQ2hCLGdCQUFlLEVBQ2hCO0VBdkZQO0lBNEZJLGVDMUZVO0lEMkZWLG1CQUFrQixFQUNuQjtFQTlGSDtJQWtHTSwwQkMzRlU7SUQ0RlYsZUNsR1M7SURtR1Qsa0JBQWlCO0lBQ2pCLGlCQUFnQjtJQUNoQix3QkFBdUI7SUFDdkIsb0JBQW1CO0lBQ25CLGNBQWEsRUFDZDtFQXpHTDtJQTRHTSwwQkFBeUI7SUFDekIsMEJBQXlCLEVBNEcxQjtFQXpOTDtNQWdIUSxlQzlHTTtNRCtHTixrQkFBaUIsRUFDbEI7RUFsSFA7TUFzSFUsYUFBWTtNQUNaLHVCQUFzQjtNQUV0QixlQ3ZISTtNRHdISixrQkFBaUI7TUFDakIsaUJBQWdCO01BQ2hCLGtCQUFpQjtNQUNqQixlQUFjLEVBQ2Y7RUE5SFQ7TUFrSVEsZUNoSU07TURpSU4sc0JDbklVLEVEd05YO0VBeE5QO1FBc0lVLGVDdElRO1FEdUlSLHNCQ3hJSyxFRHlJTjtFQXhJVDs7UUE0SVUsdUJBQXNCO1FBQ3RCLHlCQUF3QjtRQUN4QiwyQkFBMEI7UUFDMUIsc0JBQXFCO1FBQ3JCLHdCQUF1QjtRQUN2QixzQkFBcUI7UUFDckIsaUJBQWdCLEVBV2pCO0VBN0pUOztVQXFKWSx1QkFBc0I7VUFDdEIseUJBQXdCLEVBQ3pCO0VBdkpYOztVQTBKWSx3QkFBdUI7VUFDdkIsMEJBQXlCLEVBQzFCO0VBNUpYO1FBbUtVLDJEQUEwRCxFQTZDM0Q7RUFoTlQ7VUFzS1ksY0FBYTtVQUNiLHdCQUF1QjtVQUN2QixvQkFBbUIsRUFDcEI7RUF6S1g7VUE0S1ksWUFBVyxFQWNaO0VBMUxYO1lBK0tjLG1CQUFrQixFQUNuQjtFQWhMYjtZQW1MYyxtQkFBa0IsRUFNbkI7RUF6TGI7Y0FzTGdCLFlBQVc7Y0FDWCxtQkFBa0IsRUFDbkI7RUF4TGY7VUE4TGMsbUJBQWtCLEVBZ0JuQjtFQTlNYjtZQWlNZ0Isd0NBQXVDO1lBQ3ZDLG1CQUFrQjtZQUNsQixPQUFNO1lBQ04sUUFBTztZQUNQLDBDQzlMQTtZRCtMQSxlQ3JNRDtZRHNNQyxpQkFBZ0I7WUFDaEIsWUFBVztZQUNYLGFBQVk7WUFDWixtQkFBa0I7WUFDbEIsbUJBQWtCO1lBQ2xCLGtCQUFpQixFQUNsQjtFQTdNZjtRR0RFLGVGUWM7UUVQZCxnQkFBZTtRQUNmLGlCQUFnQjtRQUNoQix1QkFBc0I7UUFDdEIsc0JBQXFCO1FIaU5iLGtCQUFpQjtRQUNqQix1QkFBc0IsRUFDdkI7RUF0TlQ7VUdXTSxlQWJzRCxFQWN2RDtFSFpMO1VHZ0JJLG9CQUFtQjtVQUNuQixZQUFXLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC91c2VyL2FjY291bnQvY29tcG9uZW50cy9hY2NvdW50LXBhZ2Uvc3R5bGVzL3VzZXItYWNjb3VudC1wYWdlLnN0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL19zaGFyZWQnO1xuXG5hcHAtdXNlci1hY2NvdW50LXBhZ2Uge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtICN7ICRuYXZiYXItaGVpZ2h0IH0pO1xuICBwYWRkaW5nLWJvdHRvbTogNnJlbTtcblxuICAuYWNjb3VudC10aXRsZSB7XG4gICAgcGFkZGluZy10b3A6IDJyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICBjb2xvcjogJGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMjVyZW07XG4gIH1cblxuICAuYWNjb3VudC1zaWRlYmFyIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkZ3JleTtcblxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihtZCkge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICB9XG5cbiAgICAudXNlci1pbmZvIHtcbiAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgIC51c2VyLWltZy1vdXRlciB7XG4gICAgICAgIG1hcmdpbjogMCAyMCUgMXJlbTtcblxuICAgICAgICAudXNlci1pbWctd3JhcHBlciB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gICAgICAgICAgLnVzZXItaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAudXNlci1uYW1lIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGNvbG9yOiAkYmxhY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgfVxuXG4gICAgICAudXNlci1oYW5kbGUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY29sb3I6ICRncmV5O1xuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIH1cbiAgICB9Ly8gLnVzZXItaW5mb1xuXG4gICAgLnVzZXItYWN0aW9ucy5saXN0LWdyb3VwIHtcbiAgICAgIC5saXN0LWdyb3VwLWl0ZW0ge1xuICAgICAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgLmJhZGdlIHtcbiAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmV5O1xuICAgICAgICB9XG5cbiAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmV5O1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJGdyZXk7XG4gICAgICAgICAgY29sb3I6ICR3aGl0ZTtcblxuICAgICAgICAgIC5iYWRnZSB7XG4gICAgICAgICAgICBjb2xvcjogJGdyZXk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5kaXNhYmxlZCB7XG4gICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5saXN0LWdyb3VwLWl0ZW0tYWN0aW9uIHtcbiAgICAgICAgY29sb3I6ICRncmV5O1xuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgIH0vLyAudXNlci1hY3Rpb25zXG4gIH0vLyAuYWNjb3VudC1zaWRlYmFyXG5cbiAgLm5vLW9yZGVycy1tZXNzYWdlIHtcbiAgICBjb2xvcjogJGdyZXk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLnVzZXItb3JkZXJzIHtcbiAgICAub3JkZXJzLXRpdGxlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwdXJwbGU7XG4gICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMTVyZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgcGFkZGluZzogMXJlbTtcbiAgICB9Ly8gLm9yZGVycy10aXRsZVxuXG4gICAgLm9yZGVycy10YWJsZS1saXN0IHtcbiAgICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gICAgICBib3JkZXItc3BhY2luZzogMCAwLjc1cmVtO1xuXG4gICAgICBjYXB0aW9uIHtcbiAgICAgICAgY29sb3I6ICRncmV5O1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgIH1cblxuICAgICAgdGhlYWQge1xuICAgICAgICB0aCB7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cbiAgICAgICAgICBjb2xvcjogJGdyZXk7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgfVxuICAgICAgfS8vIHRoZWFkXG5cbiAgICAgIC5vcmRlci1pdGVtIHtcbiAgICAgICAgY29sb3I6ICRncmV5O1xuICAgICAgICBib3JkZXItY29sb3I6ICRkYXJrZ3JleTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogJGRhcmtncmV5O1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJGJsYWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgdGgsXG4gICAgICAgIHRkIHtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbiAgICAgICAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XG4gICAgICAgICAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW07XG5cbiAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAxcHg7XG4gICAgICAgICAgICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodC13aWR0aDogMXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICB9XG4gICAgICAgIH0vLyB0aCwgdGRcblxuICAgICAgICAub3JkZXItcHJvZHVjdHMtcHJldmlldyB7XG4gICAgICAgICAgLy8gVGFrZSBpbnRvIGNvbnNpZGVyYXRpb246XG4gICAgICAgICAgLy8gICAgLSBUaGUgPHRkPiBwYWRkaW5nbGVmdCBhbmQgcGFkZGluZyByaWdodCAoMC43NXJlbSAqMilcbiAgICAgICAgICAvLyAgICAtIFRocmVlIHByb2R1Y3QgaW1hZ2VzICg1MHB4ICogMyksIHR3byBvZiB3aGljaCBoYXZlICdtYXJnaW4tbGVmdDogLTJyZW0nICgycmVtICogMilcbiAgICAgICAgICBtaW4td2lkdGg6IGNhbGMoKCgwLjc1cmVtICogMikgKyAoNTBweCAqIDMpKSAtICgycmVtICogMikpO1xuXG4gICAgICAgICAgLm9yZGVyLXByb2R1Y3RzLWxpc3Qge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAub3JkZXItcHJvZHVjdC1pdGVtIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuXG4gICAgICAgICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0ycmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucHJvZHVjdC1pbWctd3JhcHBlciB7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuICAgICAgICAgICAgICAucHJvZHVjdC1pbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgICYuYmlnLW9yZGVyIHtcbiAgICAgICAgICAgIC5vcmRlci1wcm9kdWN0LWl0ZW06bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJysnIGF0dHIoZGF0YS1wcm9kdWN0cy1sZW5ndGgpO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRwdXJwbGUsIC43KTtcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9Ly8gLm9yZGVyLXByb2R1Y3RzLXByZXZpZXcuYmlnLW9yZGVyXG4gICAgICAgIH0vLyAub3JkZXItcHJvZHVjdHMtcHJldmlld1xuXG4gICAgICAgIC5vcmRlci1pdGVtLWFjdGlvbi1idG4ge1xuICAgICAgICAgIEBpbmNsdWRlIGxpbmstYnV0dG9uKCRwdXJwbGUpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgICAgIH1cblxuICAgICAgfS8vIC5vcmRlci1pdGVtXG4gICAgfS8vIC5vcmRlcnMtdGFibGUtbGlzdFxuICB9Ly8gLnVzZXItb3JkZXJzXG59XG4iLCIvLyBDb2xvcnNcbiRibGFjazogIzFlMWUxZTtcbiRkYXJrZ3JleTogIzNmM2YzZjtcbiR3aGl0ZTogI0ZGRkZGRjtcbiRncmV5OiAjOWU5ZTllO1xuJGdyZXktMjogI2Q3ZDdkNztcbiRncmV5LTM6ICNlNWU1ZTU7XG5cbiRhcXVhbWFyaW5hOiAjNTBlM2MyO1xuJHB1cnBsZTogIzkwMTNmZTtcbiRjaGVycnk6ICNmODJjNTE7XG4kcmVkOiAjZDYxODNhO1xuJGdvbGQ6ICNmY2IzMDA7XG4kZmFjZWJvb2stYmx1ZTogIzNiNTk5ODtcblxuLy8gU2l6ZXNcbiRuYXZiYXItaGVpZ2h0OiAkbmF2LWxpbmstaGVpZ2h0ICsgJG5hdi1saW5rLXBhZGRpbmcteSAqIDI7XG5cbi8vIFByZWxvYWQgSW1hZ2UgLyBCYWNrZ3JvdW5kIEltYWdlXG4kcHJlbG9hZC1pbWFnZS1iZzogcmdiYShkYXJrZW4oJHdoaXRlLCAxMCksIC4yNSk7XG5cbi8vIFByZWxvYWQgSW1hZ2UgLyBCYWNrZ3JvdW5kIEltYWdlXG4kc3Bpbm5lci1zaXplOiAyOHB4O1xuJHNwaW5uZXItY29sb3I6ICRncmV5O1xuIiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIC4wMnB4LCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbiBmcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSB0aGF0IHNwYW5zIG11bHRpcGxlIGJyZWFrcG9pbnQgd2lkdGhzLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IGJldHdlZW4gdGhlIG1pbiBhbmQgbWF4IGJyZWFrcG9pbnRzXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRsb3dlciwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJHVwcGVyLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRsb3dlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJHVwcGVyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNZWRpYSBiZXR3ZWVuIHRoZSBicmVha3BvaW50J3MgbWluaW11bSBhbmQgbWF4aW11bSB3aWR0aHMuXG4vLyBObyBtaW5pbXVtIGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludCwgYW5kIG5vIG1heGltdW0gZm9yIHRoZSBsYXJnZXN0IG9uZS5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBvbmx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50LCBub3Qgdmlld3BvcnRzIGFueSB3aWRlciBvciBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiIsIkBtaXhpbiBsaW5rLWJ1dHRvbigkY29sb3IsICRob3Zlci1jb2xvcjogZGFya2VuKCRjb2xvciwgMTAlKSkge1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XG4gIHRyYW5zaXRpb246IGNvbG9yIC41cztcblxuICAmOmhvdmVyLFxuICAmOmFjdGl2ZSxcbiAgJi5hY3RpdmUsXG4gICY6Zm9jdXMsXG4gICYuZm9jdXMge1xuICAgICY6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgIGNvbG9yOiAkaG92ZXItY29sb3I7XG4gICAgfVxuICB9XG5cbiAgJltkaXNhYmxlZF0ge1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgb3BhY2l0eTogLjU7XG4gIH1cbn1cblxuQG1peGluIG91dGxpbmUtYnV0dG9uKCRjb2xvciwgJGJhY2tncm91bmQsICRib3JkZXIsICRob3Zlci1jb2xvcjogJGJhY2tncm91bmQsICRob3Zlci1iYWNrZ3JvdW5kOiAkY29sb3IpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItY29sb3I6ICRib3JkZXI7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTJyZW07XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuNXMsIGNvbG9yIC41cywgYmFja2dyb3VuZC1jb2xvciAuNXM7XG5cbiAgJjpob3ZlciB7XG4gICAgJjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkaG92ZXItYmFja2dyb3VuZCwgLjcpO1xuICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKCRib3JkZXIsIC43KTtcbiAgICAgIGNvbG9yOiAkaG92ZXItY29sb3I7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgJjphY3RpdmUsXG4gICYuYWN0aXZlLFxuICAmOmZvY3VzLFxuICAmLmZvY3VzIHtcbiAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaG92ZXItYmFja2dyb3VuZDtcbiAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlcjtcbiAgICAgIGNvbG9yOiAkaG92ZXItY29sb3I7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgJltkaXNhYmxlZF0ge1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgb3BhY2l0eTogLjU7XG4gIH1cbn1cblxuQG1peGluIGZpbGwtYnV0dG9uKCRjb2xvciwgJGJhY2tncm91bmQsICRob3Zlci1jb2xvcjogJGNvbG9yLCAkaG92ZXItYmFja2dyb3VuZDogZGFya2VuKCRiYWNrZ3JvdW5kLCA1JSkpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjEycmVtO1xuICB0cmFuc2l0aW9uOiBjb2xvciAuNXMsIGJhY2tncm91bmQtY29sb3IgLjVzO1xuXG4gICY6aG92ZXIge1xuICAgICY6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGhvdmVyLWJhY2tncm91bmQsIC43KTtcbiAgICAgIGNvbG9yOiAkaG92ZXItY29sb3I7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgJjphY3RpdmUsXG4gICYuYWN0aXZlLFxuICAmOmZvY3VzLFxuICAmLmZvY3VzIHtcbiAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaG92ZXItYmFja2dyb3VuZDtcbiAgICAgIGNvbG9yOiAkaG92ZXItY29sb3I7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgJltkaXNhYmxlZF0ge1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgb3BhY2l0eTogLjU7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/user/account/components/account-page/user-account-page.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/user/account/components/account-page/user-account-page.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <h1 class=\"account-title\">My account</h1>\n    </div>\n  </div>\n  <div class=\"row\">\n    <!-- Sidebar -->\n    <div class=\"col-12 col-lg-3\">\n      <div class=\"row no-gutters account-sidebar\">\n        <div class=\"col-12 col-sm-6 col-lg-12\">\n          <div class=\"user-info\">\n            <div class=\"user-img-outer\">\n              <app-preload-image class=\"user-img-wrapper\" [classes]=\"'user-img'\" [ratio]=\"{w:1, h:1}\" [src]=\"user.image\" alt=\"User image\" title=\"User image\">\n              </app-preload-image>\n            </div>\n            <span class=\"user-name\">{{ user.name }}</span>\n            <span class=\"user-handle\">@{{ user.handle }}</span>\n          </div>\n        </div>\n        <div class=\"col-12 col-sm-6 col-lg-12\">\n          <div class=\"list-group list-group-flush user-actions\">\n            <a class=\"list-group-item list-group-item-action\" tabindex=\"-1\">\n              Profile\n            </a>\n            <a class=\"list-group-item list-group-item-action active\" tabindex=\"-1\" [ngClass]=\"{'disabled' : !(user.orders && user.orders.length)}\">\n              My Orders\n              <span class=\"badge badge-pill\" *ngIf=\"user.orders && user.orders.length\">{{ user.orders.length }}</span>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- Main content -->\n    <div class=\"col-12 col-lg-9\">\n      <h4 class=\"no-orders-message\" *ngIf=\"!(user.orders && user.orders.length)\">There are no order associated with your account</h4>\n      <!-- User Orders -->\n      <div class=\"user-orders\" *ngIf=\"(user.orders && user.orders.length)\">\n        <h2 class=\"orders-title\">ORDERS</h2>\n        <div class=\"table-responsive\">\n          <table class=\"table table-hover orders-table-list\">\n            <caption>User orders list</caption>\n            <thead>\n              <tr>\n                <th scope=\"col\">\n                  Order number\n                </th>\n                <th scope=\"col\">\n                  Date\n                </th>\n                <th class=\"text-center\" scope=\"col\">\n                  Preview\n                </th>\n                <th scope=\"col\">\n                  Total\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr class=\"order-item\" *ngFor=\"let order of user.orders\">\n                <th scope=\"row\">#{{ order.number }}</th>\n                <td>\n                  {{ order.date }}\n                </td>\n                <td class=\"order-products-preview\" [ngClass]=\"{ 'big-order': (order.preview.length > 3) }\">\n                  <div class=\"order-products-list\">\n                    <div class=\"order-product-item\" *ngFor=\"let productImage of order.preview | slice:0:3\" [attr.data-products-length]=\"(order.preview.length - 3)\">\n                      <app-preload-image class=\"product-img-wrapper\" [classes]=\"'product-img'\" [ratio]=\"{w:1, h:1}\" [src]=\"productImage\" alt=\"Order product image\" title=\"Order product image\">\n                      </app-preload-image>\n                    </div>\n                  </div>\n                </td>\n                <td class=\"font-weight-bold\">\n                  {{ order.total }}\n                </td>\n                <td class=\"text-center\">\n                  <a class=\"btn btn-sm order-item-action-btn\" tabindex=\"-1\">Details</a>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <!-- / User Orders -->\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user/account/components/account-page/user-account-page.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/user/account/components/account-page/user-account-page.component.ts ***!
  \*************************************************************************************/
/*! exports provided: UserAccountPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAccountPageComponent", function() { return UserAccountPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var UserAccountPageComponent = /** @class */ (function () {
    function UserAccountPageComponent(route) {
        this.route = route;
        this.user = {};
        this.user = route.snapshot.data['data'].userData;
    }
    UserAccountPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-account-page',
            template: __webpack_require__(/*! ./user-account-page.component.html */ "./src/app/user/account/components/account-page/user-account-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./styles/user-account-page.styles.scss */ "./src/app/user/account/components/account-page/styles/user-account-page.styles.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], UserAccountPageComponent);
    return UserAccountPageComponent;
}());



/***/ }),

/***/ "./src/app/user/account/resolvers/user-account-page.resolver.ts":
/*!**********************************************************************!*\
  !*** ./src/app/user/account/resolvers/user-account-page.resolver.ts ***!
  \**********************************************************************/
/*! exports provided: UserAccountPageResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAccountPageResolver", function() { return UserAccountPageResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/user/services/user.service.ts");



var UserAccountPageResolver = /** @class */ (function () {
    function UserAccountPageResolver(userDataService) {
        this.userDataService = userDataService;
    }
    UserAccountPageResolver.prototype.resolve = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var seo = {
                title: 'Account',
                description: 'Your account description',
                keywords: 'your, account, keywords'
            };
            _this.userDataService.getAccountData()
                .then(function (userData) {
                return resolve({
                    userData: userData,
                    seo: seo
                });
            });
        });
    };
    UserAccountPageResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], UserAccountPageResolver);
    return UserAccountPageResolver;
}());



/***/ }),

/***/ "./src/app/user/account/user-account.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/account/user-account.module.ts ***!
  \*****************************************************/
/*! exports provided: userAccountRoutes, UserAccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userAccountRoutes", function() { return userAccountRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAccountModule", function() { return UserAccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ */ "./src/app/user/index.ts");
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../auth/services/auth.service */ "./src/app/auth/services/auth.service.ts");
/* harmony import */ var _components_account_page_user_account_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/account-page/user-account-page.component */ "./src/app/user/account/components/account-page/user-account-page.component.ts");
/* harmony import */ var _resolvers_user_account_page_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resolvers/user-account-page.resolver */ "./src/app/user/account/resolvers/user-account-page.resolver.ts");









var userAccountRoutes = [
    {
        path: '',
        component: _components_account_page_user_account_page_component__WEBPACK_IMPORTED_MODULE_7__["UserAccountPageComponent"],
        resolve: {
            data: _resolvers_user_account_page_resolver__WEBPACK_IMPORTED_MODULE_8__["UserAccountPageResolver"]
        },
        canActivate: [_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]]
    }
];
var UserAccountModule = /** @class */ (function () {
    function UserAccountModule() {
    }
    UserAccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_account_page_user_account_page_component__WEBPACK_IMPORTED_MODULE_7__["UserAccountPageComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(userAccountRoutes),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                ___WEBPACK_IMPORTED_MODULE_5__["UserSharedModule"]
            ],
            providers: [
                _resolvers_user_account_page_resolver__WEBPACK_IMPORTED_MODULE_8__["UserAccountPageResolver"]
            ]
        })
    ], UserAccountModule);
    return UserAccountModule;
}());



/***/ }),

/***/ "./src/app/user/index.ts":
/*!*******************************!*\
  !*** ./src/app/user/index.ts ***!
  \*******************************/
/*! exports provided: UserService, UserSharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/user.service */ "./src/app/user/services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _services_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]; });

/* harmony import */ var _user_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-shared.module */ "./src/app/user/user-shared.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserSharedModule", function() { return _user_shared_module__WEBPACK_IMPORTED_MODULE_1__["UserSharedModule"]; });





/***/ }),

/***/ "./src/app/user/services/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/user/services/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var UserService = /** @class */ (function () {
    function UserService(http, baseHref) {
        this.http = http;
        this.baseHref = baseHref;
    }
    UserService.prototype.getAccountData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.baseHref + '/assets/data/user.json')
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject();
            });
        });
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["APP_BASE_HREF"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user/user-shared.module.ts":
/*!********************************************!*\
  !*** ./src/app/user/user-shared.module.ts ***!
  \********************************************/
/*! exports provided: UserSharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSharedModule", function() { return UserSharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/user.service */ "./src/app/user/services/user.service.ts");



var UserSharedModule = /** @class */ (function () {
    function UserSharedModule() {
    }
    UserSharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [],
            entryComponents: [],
            providers: [
                _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
            ],
            exports: []
        })
    ], UserSharedModule);
    return UserSharedModule;
}());



/***/ })

}]);
//# sourceMappingURL=user-account-user-account-module.js.map