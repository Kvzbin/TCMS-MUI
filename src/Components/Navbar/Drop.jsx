// import React, { useState } from 'react';
// import { Button, Menu, MenuItem } from '@mui/material';
// import { Link } from 'react-router-dom';

// const Drop = () => {
//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };


//   return (
//     <div>
//       <Button
//         onMouseEnter={handleMenuOpen}
//         onMouseLeave={handleMenuClose}
//         onClick={handleMenuOpen}
//         color="inherit"
//       >
//         <Link to='#'>Register</Link>
//       </Button>
//       <Menu
//         anchorEl={anchorEl}
//         open={Boolean(anchorEl)}
//         onClose={handleMenuClose}
//         MenuListProps={{
//           onMouseEnter: handleMenuOpen,
//           onMouseLeave: handleMenuClose,
//         }}
//       >
//         <MenuItem onClick={handleMenuClose}>Guest Registration</MenuItem>
//         <MenuItem onClick={handleMenuClose}>Employee Registration</MenuItem>
//       </Menu>
//     </div>
//   );
// };

// export default Drop;

import React from 'react';
import { Menu, MenuItem, Button } from '@mui/material';
import { useState } from 'react';
import './Drop.css'
import { Link } from 'react-router-dom';

const Drop = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMouseEnter = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  return (
    <div onMouseLeave={handleMouseLeave}>
      <Button
        aria-controls="register-menu"
        aria-haspopup="true"
        onMouseEnter={handleMouseEnter}
        size='small'
        color='inherit'
      >
        Register
      </Button>
      <Menu
        id="register-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMouseLeave}
        MenuListProps={{ onMouseLeave: handleMouseLeave }}
      >
        <MenuItem className='dropdown-register' onClick={handleMouseLeave}> <Link style={{color: 'inherit'}} to='/guest-registration' > Guest </Link></MenuItem>
        <MenuItem className='dropdown-register' onClick={handleMouseLeave}> <Link style={{color: 'inherit'}} to='/employee-registration' > Employee </Link></MenuItem>
      </Menu>
    </div>
  );
};

export default Drop;
