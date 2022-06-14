import React from "react";
import Countris from "./contres";
import Driver from "./driver";
import NewNews from "./new-news";
import SomeInf from "./some-inf";
import SrivicesTapsi from "./srvices-tapsi";
import Srevices from "./type-of-services";

function Main() {
  return (
    <React.Fragment>
      <Srevices />
      <SrivicesTapsi />
      <SomeInf />
      <Driver />
      <NewNews />
      <Countris />
    </React.Fragment>
  );
}

export default React.memo(Main);
