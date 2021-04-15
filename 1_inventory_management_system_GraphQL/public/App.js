"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ProductTable = /*#__PURE__*/function (_React$Component) {
  _inherits(ProductTable, _React$Component);

  function ProductTable() {
    _classCallCheck(this, ProductTable);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProductTable).apply(this, arguments));
  }

  _createClass(ProductTable, [{
    key: "render",
    value: function render() {
      var productRows = this.props.products.map(function (product) {
        return React.createElement(ProductRow, {
          key: product.id,
          product: product
        });
      });
      return React.createElement("div", null, React.createElement("p", null, " Showing all available products Hee"), " ", React.createElement("hr", null), React.createElement("table", {
        className: "bordered-table"
      }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Product Name"), React.createElement("th", null, "Price"), React.createElement("th", null, "Category"), React.createElement("th", null, "Image"))), React.createElement("tbody", null, productRows)));
    }
  }]);

  return ProductTable;
}(React.Component);

var ProductRow = /*#__PURE__*/function (_React$Component2) {
  _inherits(ProductRow, _React$Component2);

  function ProductRow() {
    _classCallCheck(this, ProductRow);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProductRow).apply(this, arguments));
  }

  _createClass(ProductRow, [{
    key: "render",
    value: function render() {
      var product = this.props.product;
      return React.createElement("tr", null, React.createElement("td", null, product.name), React.createElement("td", null, "$", product.price), React.createElement("td", null, product.category), React.createElement("td", null, React.createElement("a", {
        href: product.image,
        target: "_blank"
      }, "View")));
    }
  }]);

  return ProductRow;
}(React.Component);

var ProductAdd = /*#__PURE__*/function (_React$Component3) {
  _inherits(ProductAdd, _React$Component3);

  function ProductAdd() {
    var _this;

    _classCallCheck(this, ProductAdd);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProductAdd).call(this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ProductAdd, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.productAdd;
      var product = {
        category: form.category.value,
        price: form.price.value.slice(1),
        name: form.name.value,
        image: form.image.value
      };
      this.props.addProduct(product);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("section", null, React.createElement("p", null, "Add a new product to inventory"), React.createElement("hr", null), React.createElement("form", {
        name: "productAdd",
        onSubmit: this.handleSubmit
      }, React.createElement("div", {
        className: "product-inventory"
      }, React.createElement("label", null, "Category:"), React.createElement("select", {
        name: "category",
        id: "category"
      }, React.createElement("option", {
        value: "Accessories"
      }, "Accessories"), React.createElement("option", {
        value: "Shirts"
      }, "Shirts"), React.createElement("option", {
        value: "Jeans"
      }, "Jeans"), React.createElement("option", {
        value: "Jackets"
      }, "Jackets"), React.createElement("option", {
        value: "Sweaters"
      }, "Sweaters"))), React.createElement("div", {
        className: "product-inventory"
      }, React.createElement("label", null, "Price:"), React.createElement("input", {
        type: "text",
        id: "price",
        defaultValue: "$"
      })), React.createElement("div", {
        className: "product-inventory"
      }, React.createElement("label", null, "Product Name:"), React.createElement("input", {
        type: "text",
        id: "name"
      })), React.createElement("div", {
        className: "product-inventory"
      }, React.createElement("label", null, "Image URL:"), React.createElement("input", {
        type: "text",
        id: "image"
      })), React.createElement("button", null, "Add Product")));
    }
  }]);

  return ProductAdd;
}(React.Component);

var ProductList = /*#__PURE__*/function (_React$Component4) {
  _inherits(ProductList, _React$Component4);

  function ProductList() {
    var _this2;

    _classCallCheck(this, ProductList);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(ProductList).call(this));
    _this2.state = {
      products: []
    };
    _this2.addProduct = _this2.addProduct.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(ProductList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function () {
      var _loadData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var query, response, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = "query {\n      productList {\n        id name  price category\n        image \n      }\n    }";
                _context.next = 3;
                return fetch('/graphql', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    query: query
                  })
                });

              case 3:
                response = _context.sent;
                _context.next = 6;
                return response.json();

              case 6:
                result = _context.sent;
                this.setState({
                  products: result.data.productList
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadData() {
        return _loadData.apply(this, arguments);
      }

      return loadData;
    }()
  }, {
    key: "addProduct",
    value: function () {
      var _addProduct = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(product) {
        var query, response;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // product.id = this.state.products.length + 1;
                // const newProductList = this.state.products.slice();
                // newProductList.push(product);
                // this.setState({ products: newProductList }); 
                // const query = `mutation {
                //   productAdd(product:{
                //     name: "${product.name}",
                //     price: "${product.price}",
                //     category: "${product.category}",
                //     image: "${product.image}",
                //   }) {
                //     id
                //   }
                // }`;
                query = "mutation productAdd($product: ProductInputs!) {\n        productAdd(product: $product) {\n          id\n        }\n      }";
                _context2.next = 3;
                return fetch('/graphql', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    query: query,
                    variables: {
                      product: product
                    }
                  })
                });

              case 3:
                response = _context2.sent;
                this.loadData();

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function addProduct(_x) {
        return _addProduct.apply(this, arguments);
      }

      return addProduct;
    }()
  }, {
    key: "render",
    value: function render() {
      return React.createElement(React.Fragment, null, React.createElement("h1", null, "My Company Inventory"), React.createElement(ProductTable, {
        products: this.state.products
      }), React.createElement(ProductAdd, {
        addProduct: this.addProduct
      }));
    }
  }]);

  return ProductList;
}(React.Component);

var element = React.createElement(ProductList, null);
ReactDOM.render(element, document.getElementById('contents'));