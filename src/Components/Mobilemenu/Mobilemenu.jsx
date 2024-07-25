import React, { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import "./Mobilemenu.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isIconClicked, setIsIconClicked] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsIconClicked(!isIconClicked);
  };

  return (
    <nav className="menu-icon-navbar">
      <svg
        className="menu-icon-navbar-logo"
        viewBox="0 0 136 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_247_666)">
          <path
            d="M11.133 15.7533C11.133 16.714 10.8823 17.5434 10.381 18.2421C9.8797 18.9407 9.20239 19.4697 8.34965 19.8291C7.49634 20.1884 6.55546 20.368 5.52644 20.368C4.32456 20.368 3.27917 20.2236 2.38968 19.9348C1.49991 19.6461 0.710047 19.1458 0.0195312 18.4335L2.30986 16.1162C2.66847 16.479 3.13963 16.7425 3.72391 16.9072C4.30791 17.0719 4.91545 17.1541 5.54624 17.1541C6.93388 17.1541 7.62755 16.7143 7.62755 15.8341C7.62755 15.4579 7.53137 15.1691 7.33872 14.9675C7.14606 14.7659 6.82736 14.6349 6.38262 14.5745L4.63006 14.3226C3.34205 14.1413 2.36959 13.7079 1.71209 13.0229C1.04827 12.3309 0.716365 11.347 0.716365 10.0705C0.716365 9.17722 0.930554 8.3795 1.35864 7.67736C1.78674 6.9755 2.40088 6.42645 3.20079 6.02992C4.0007 5.63367 4.93842 5.43555 6.01396 5.43555C7.0895 5.43555 8.01717 5.57499 8.81708 5.85387C9.61699 6.13275 10.3158 6.57751 10.9133 7.18873L8.67266 9.45582C8.30084 9.07961 7.89917 8.84111 7.46763 8.74031C7.0361 8.6395 6.51814 8.58925 5.91404 8.58925C5.34297 8.58925 4.90827 8.72694 4.60938 9.00234C4.31049 9.27803 4.16119 9.59351 4.16119 9.94967C4.16119 10.2117 4.25738 10.44 4.45003 10.6347C4.67571 10.863 5.00761 11.0074 5.44604 11.0678L7.1986 11.3095C8.4734 11.4978 9.42577 11.9042 10.0566 12.5288C10.435 12.8983 10.7089 13.3465 10.878 13.8738C11.0471 14.4013 11.1318 15.0274 11.1318 15.7528L11.133 15.7533Z"
            fill="white"
          />
          <path
            d="M24.1876 10.2822C24.1876 11.1084 23.9935 11.8809 23.605 12.5996C23.2165 13.3183 22.6506 13.8993 21.9073 14.3429C21.1637 14.7862 20.2707 15.0079 19.2285 15.0079H17.0476V20.2471H13.4824V5.55664H19.2331C20.2745 5.55664 21.1665 5.77684 21.9093 6.21666C22.6521 6.65677 23.2177 7.23604 23.6056 7.95474C23.9938 8.67344 24.1876 9.44938 24.1876 10.2822ZM20.6224 10.2872C20.6224 10.0263 20.5607 9.78171 20.4375 9.55425C20.3144 9.3265 20.1346 9.14435 19.8983 9.00694C19.662 8.86953 19.3873 8.80098 19.0743 8.80098H17.0473V11.7632H19.0743C19.3873 11.7632 19.6618 11.6947 19.8983 11.5576C20.1346 11.4201 20.3141 11.2395 20.4375 11.0152C20.5607 10.7909 20.6224 10.5483 20.6224 10.2872Z"
            fill="white"
          />
          <path
            d="M36.8447 12.9017V13.3953C36.8447 14.2148 36.8163 14.9201 36.76 15.5113C36.7038 16.1025 36.5694 16.6736 36.3572 17.2241C36.145 17.7749 35.82 18.2719 35.3822 18.7153C34.845 19.2594 34.2526 19.671 33.6061 19.9496C32.9595 20.2285 32.1983 20.3676 31.3229 20.3676C30.7326 20.3676 30.2003 20.3055 29.726 20.1814C29.2516 20.0571 28.8138 19.8741 28.4124 19.6324C28.011 19.3904 27.6314 19.0851 27.2734 18.7153C26.6366 18.0703 26.232 17.3386 26.0595 16.5188C25.8872 15.6993 25.8008 14.6581 25.8008 13.3953V12.4079C25.8008 11.145 25.8869 10.1021 26.0595 9.27943C26.2317 8.45673 26.6366 7.72263 27.2734 7.078C27.8238 6.52053 28.4193 6.10743 29.0593 5.83872C29.6995 5.57029 30.4541 5.43579 31.3226 5.43579C32.1911 5.43579 32.9575 5.57175 33.6009 5.84395C34.2443 6.11615 34.8378 6.5275 35.3819 7.07829C35.8197 7.5216 36.1447 8.02039 36.3569 8.57438C36.5691 9.12866 36.7035 9.70124 36.7597 10.2924C36.816 10.8836 36.8444 11.5889 36.8444 12.4084V12.902L36.8447 12.9017ZM33.2796 12.9017C33.2796 11.6523 33.238 10.7993 33.1553 10.3427C33.0723 9.886 32.9376 9.53653 32.7519 9.29483C32.6192 9.10687 32.4249 8.95233 32.1693 8.83148C31.9138 8.71034 31.6298 8.64991 31.3177 8.64991C31.0056 8.64991 30.7366 8.70889 30.4914 8.82625C30.2456 8.94361 30.0464 9.0999 29.8939 9.29454C29.7745 9.44938 29.6763 9.63879 29.6002 9.86392C29.5238 10.0891 29.4658 10.4351 29.4259 10.9019C29.386 11.3687 29.3662 12.0354 29.3662 12.902C29.3662 13.7686 29.386 14.4254 29.4259 14.8919C29.4658 15.3591 29.5238 15.703 29.6002 15.9247C29.6766 16.1463 29.7745 16.3346 29.8939 16.4888C30.2324 16.9321 30.707 17.1538 31.318 17.1538C31.929 17.1538 32.4134 16.9321 32.7519 16.4888C32.9376 16.2268 33.0723 15.8759 33.1553 15.4361C33.2383 14.9962 33.2796 14.1512 33.2796 12.902V12.9017Z"
            fill="white"
          />
          <path
            d="M50.7963 20.2471H46.6727L44.0975 14.776H42.8894V20.2471H39.3242V5.55664H45.0749C46.116 5.55664 47.008 5.77684 47.7508 6.21666C48.4936 6.65677 49.0592 7.23604 49.4471 7.95474C49.8353 8.67344 50.0291 9.44938 50.0291 10.2822C50.0291 11.2026 49.7988 11.9901 49.3389 12.6449C48.8786 13.2997 48.3207 13.7921 47.6655 14.121L50.796 20.2471H50.7963ZM46.4642 10.2872C46.4642 10.0263 46.4028 9.78171 46.2793 9.55425C46.1562 9.3265 45.9764 9.14435 45.7401 9.00694C45.5038 8.86953 45.2291 8.80098 44.9161 8.80098H42.8891V11.7632H44.9161C45.2291 11.7632 45.5035 11.6947 45.7401 11.5576C45.9761 11.4201 46.1559 11.2395 46.2793 11.0152C46.4028 10.7909 46.4642 10.5483 46.4642 10.2872Z"
            fill="white"
          />
          <path
            d="M62.4691 8.77076H58.8942V20.2471H55.3291V8.77076H51.7539V5.55664H62.4691V8.77076Z"
            fill="white"
          />
          <path
            d="M74.2875 15.7533C74.2875 16.714 74.0369 17.5434 73.5356 18.2421C73.0343 18.9407 72.357 19.4697 71.5039 19.8291C70.6509 20.1884 69.7098 20.368 68.6807 20.368C67.4791 20.368 66.4335 20.2236 65.544 19.9348C64.6542 19.6461 63.8643 19.1458 63.1738 18.4335L65.4642 16.1162C65.8228 16.479 66.2939 16.7425 66.8782 16.9072C67.4622 17.0719 68.0697 17.1541 68.7005 17.1541C70.0879 17.1541 70.7819 16.7143 70.7819 15.8341C70.7819 15.4579 70.6857 15.1691 70.493 14.9675C70.3004 14.7659 69.9817 14.6349 69.5369 14.5745L67.7843 14.3226C66.4963 14.1413 65.5239 13.7079 64.8664 13.0229C64.2026 12.3309 63.8707 11.347 63.8707 10.0705C63.8707 9.17722 64.0846 8.3795 64.5129 7.67736C64.941 6.9755 65.5552 6.42645 66.3554 6.02992C67.1553 5.63367 68.093 5.43555 69.1685 5.43555C70.2441 5.43555 71.1718 5.57499 71.9719 5.85387C72.7719 6.13275 73.4707 6.57751 74.0682 7.18873L71.8275 9.45582C71.4557 9.07961 71.054 8.84111 70.6225 8.74031C70.1907 8.6395 69.673 8.58925 69.0689 8.58925C68.4978 8.58925 68.0631 8.72694 67.7642 9.00234C67.4656 9.27803 67.3161 9.59351 67.3161 9.94967C67.3161 10.2117 67.4122 10.44 67.6049 10.6347C67.8306 10.863 68.1625 11.0074 68.6009 11.0678L70.3535 11.3095C71.6283 11.4978 72.5806 11.9042 73.2117 12.5288C73.5901 12.8983 73.8641 13.3465 74.0332 13.8738C74.2026 14.4013 74.2873 15.0274 74.2873 15.7528L74.2875 15.7533Z"
            fill="white"
          />
          <path
            d="M87.4435 12.9017V14.1009C87.4435 14.8129 87.4119 15.4192 87.349 15.9195C87.2858 16.42 87.1449 16.9136 86.9261 17.4004C86.7073 17.8876 86.3757 18.3562 85.9312 18.8062C84.9826 19.7669 83.6794 20.2471 82.0213 20.2471H76.6387V5.55664H82.0213C83.6794 5.55664 84.9826 6.03684 85.9312 6.99753C86.3757 7.44781 86.7073 7.9161 86.9261 8.40299C87.1449 8.89016 87.2858 9.38401 87.349 9.88426C87.4122 10.3848 87.4435 10.9911 87.4435 11.7028V12.9017ZM83.8783 12.9017C83.8783 11.6926 83.8533 10.8952 83.8034 10.5088C83.7534 10.1228 83.6521 9.81861 83.499 9.59695C83.133 9.04645 82.5605 8.77076 81.7815 8.77076H80.2038V17.033H81.7815C82.5605 17.033 83.133 16.7576 83.499 16.2068C83.6122 16.0322 83.6905 15.8593 83.7336 15.6879C83.777 15.5165 83.812 15.2228 83.8384 14.8062C83.8651 14.39 83.8783 13.7549 83.8783 12.9017Z"
            fill="#458AC6"
          />
          <path
            d="M100.678 15.0883C100.678 15.8608 100.535 16.5763 100.25 17.2346C99.9644 17.8928 99.5659 18.4573 99.0548 18.9273C98.5434 19.3976 97.9526 19.7553 97.2821 20.0004C96.6114 20.2459 95.9011 20.3682 95.1512 20.3682C94.162 20.3682 93.2441 20.15 92.3977 19.7134C91.5513 19.2768 90.884 18.6572 90.3959 17.8545C89.9081 17.0518 89.6641 16.1301 89.6641 15.0886V5.55664H93.2292V15.0076C93.2292 15.6792 93.4006 16.205 93.7434 16.5844C94.086 16.9641 94.5571 17.1538 95.156 17.1538C95.5419 17.1538 95.8847 17.0698 96.1842 16.9019C96.4837 16.734 96.7134 16.4888 96.873 16.1664C97.0326 15.8439 97.1127 15.4576 97.1127 15.0076V5.55664H100.678V15.0883Z"
            fill="#458AC6"
          />
          <path
            d="M114.709 20.2471H111.593L106.942 12.8616V20.2471H103.377V5.55664H106.495L111.144 12.9421V5.55664H114.709V20.2471Z"
            fill="#458AC6"
          />
          <path
            d="M121.221 20.2471H117.656V5.55664H121.221V20.2471Z"
            fill="#458AC6"
          />
          <path
            d="M136.002 20.2471H132.277L131.6 18.0608H127.129L126.422 20.2471H122.688L127.965 5.55664H130.724L136.002 20.2471ZM130.664 15.0479L129.439 11.1285L128.135 15.0479H130.664Z"
            fill="#458AC6"
          />
        </g>
        <defs>
          <clipPath id="clip0_247_666">
            <rect width="136" height="26" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <div className="menu-icon" onClick={toggleMenu}>
        <MdOutlineMenu
          className={`icon-menu-mobile ${isIconClicked ? "clicked" : ""}`}
        />
      </div>
      <div className={`dropdown-menu ${isOpen ? "show" : ""}`}>
        <ul>
          <li>
            <a href="#">Transfers</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Fixtures</a>
          </li>
          <li>
            <a href="#">Competitions</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
