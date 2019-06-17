import React, { useState } from "react";

const DropdownMenu = ({ items }) => {
  const [showItems, setShowItems] = useState(false);
  const [itemData] = useState(items);
  const [selectedItem, setSelectedItem] = useState(items[0]);

  const dropDown = () => {
    setShowItems(!showItems);
  };

  const selectItem = item => {
    setSelectedItem(item);
    setShowItems(!showItems);
  };

  return (
    <div>
      <div className="dropdown-menu--box">
        <div className="dropdown-menu--container">
          <div className="dropdown-menu--selected-item">
            {selectedItem.value}
          </div>
          <div className="dropdown-menu--arrow" onClick={dropDown}>
            <span
              className={`${
                showItems
                  ? "dropdown-menu--arrow-up"
                  : "dropdown-menu--arrow-down"
              }`}
            />
          </div>

          <div
            className="dropdown-menu--items"
            style={{ display: showItems ? "block" : "none" }}
          >
            {itemData.map(item => (
              <div
                key={item.id}
                onClick={() => selectItem(item)}
                className={selectedItem === item ? "selected" : ""}
              >
                {item.value}
              </div>
            ))}
          </div>
        </div>
      </div>
      <input type="hidden" value={selectItem.id} />
    </div>
  );
};

export default DropdownMenu;

// class DropdownMenu extends React.Component {
//   state = {
//     ...this.props,
//     items: this.props.items || [],
//     selectedItem: this.props.items[0] || this.props.selectedItem,
//     showItems: false
//   };

//   dropDown = () => {
//     this.setState(prevState => ({
//       showItems: !prevState.showItems
//     }));
//   };

//   selectItem = item => {
//     this.setState({
//       selectedItem: item,
//       showItems: false
//     });
//   };

//   render() {
//     return (
//       <div>
//         <div className="dropdown-menu--box">
//           <div className="dropdown-menu--container">
//             <div className="dropdown-menu--selected-item">
//               {this.state.selectedItem.value}
//             </div>
//             <div className="dropdown-menu--arrow" onClick={this.dropDown}>
//               <span
//                 className={`${
//                   this.state.showItems
//                     ? "dropdown-menu--arrow-up"
//                     : "dropdown-menu--arrow-down"
//                 }`}
//               />
//             </div>
//           </div>
//           <div
//             className="dropdown-menu--items"
//             style={{ display: this.state.showItems ? "block" : "none" }}
//           >
//             {this.state.items.map(item => (
//               <div
//                 key={item.id}
//                 onClick={() => this.selectItem(item)}
//                 className={this.state.selectedItem === item ? "selected" : ""}
//               >
//                 {item.value}
//               </div>
//             ))}
//           </div>
//         </div>
//         <input
//           type="hidden"
//           name={this.state.name}
//           value={this.state.selectedItem.id}
//         />
//       </div>
//     );
//   }
// }

// export default DropdownMenu;
