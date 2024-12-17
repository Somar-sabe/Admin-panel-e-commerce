import { RiArticleLine, RiCoinsLine, RiContactsLine, RiCoupon2Line, RiCurrencyFill, RiExchangeDollarFill, RiHomeLine, RiImageLine, RiListUnordered, RiPagesLine, RiPercentLine, RiQuestionnaireLine, RiRefund2Line, RiSettings3Line, RiStore2Line, RiStore3Line, RiTruckLine, RiWalletLine, RiWindowLine } from "react-icons/ri";

const MENUITEMS = [
  {
    title: "Dashboard",
    displayTitle: "Dashboard",
    icon: <RiHomeLine />,
    path: "/dashboard",
    type: "link"
  },
  {
    title: "Users",
    displayTitle: "Users",
    icon: <RiContactsLine />,
    type: "sub",
    children: [
      { title: "AddUser", path: "/user/create", displayTitle: "AddUser", permission: ["user.create"] },
      { title: "AllUsers", path: "/user", displayTitle: "AllUsers", permission: ["user.index"] },
      { title: "Role", path: "/role", displayTitle: "Role", permission: ["role.index"] },
    ],
  },
  {
    title: "Products",
    displayTitle: "Products",
    icon: <RiStore3Line />,
    type: "sub",
    children: [
      { title: "AddProduct", path: "/product/create", displayTitle: "Add Product", permission: ["product.create"] },
      { title: "AllProducts", path: "/product", displayTitle: "All Product", badgeType: 'badge bg-warning text-dark ml-3', badgeValue: 0, permission: ["product.create"] },
      { title: "Attributes", path: "/attribute", displayTitle: "All Attributes", permission: ["attribute.index", "attribute.create"] },
      { title: "Categories", path: "/category", displayTitle: "Categories", permission: ["category.index"] },
      { title: "Tags", path: "/tag", displayTitle: "All Tag", permission: ["tag.index", "tag.create"] },
      { title: "Q&A", path: "/qna", displayTitle: "All Tag", permission: ["question_and_answer.index", "question_and_answer.create"] },
    ],
  },

  {
    title: "Orders",
    displayTitle: "Orders",
    icon: <RiListUnordered />,
    type: "sub",
    children: [
      { title: "AllOrders", path: "/order", displayTitle: "All Orders", permission: ["order.index"] },
      
  },
  


  {
    title: "Settings",
    displayTitle: "Settings",
    icon: <RiSettings3Line />,
    path: "/setting",
    permission: ["setting.index"],
    type: "link"
  }
];

export default MENUITEMS;
