import React, { useState } from "react";
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";

const Canva = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleClick = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  return (
    <OffCanvas
      width={300}
      transitionDuration={300}
      effect={"parallax"}
      isMenuOpened={isMenuOpened}
      position={"right"}
    >
      <OffCanvasBody className="bg-slate-200">
        <p>This is the main body container.</p>
        <p>
          <a href="#" onClick={handleClick}>
            Click here
          </a>{" "}
          to toggle the menu.
        </p>
      </OffCanvasBody>
      <OffCanvasMenu className="border border-pink-300 p-3 bg-white">
        <p>Placeholder content.</p>
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
          <li>Link 4</li>
          <li>Link 5</li>
          <li>
            <a href="#" onClick={handleClick}>
              Toggle Menu
            </a>
          </li>
        </ul>
      </OffCanvasMenu>
    </OffCanvas>
  );
};

export default Canva;
