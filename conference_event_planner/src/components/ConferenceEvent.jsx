import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkIfLandingPage } from "./NavigationSlice";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

const ConferenceEvent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (window.location.pathname !== "/") {
      dispatch(checkIfLandingPage(false));
    } else {
      dispatch(checkIfLandingPage(true));
    }
  }, [window.location.pathname]);
  return <></>;
};

export default ConferenceEvent;
