import React from "react";
import Heading from "../components/Heading";
import Tabs from "../components/Tabs";
import Tab from "../components/Tab";

const Support = () => {
  const headingTxt =
    "We are ready to support your buisness need to be more advance";

  const itemOneArray = [ "Number of Website","Number of Email Account","Unlimited MySql Databases","Unlimited Bandwidth","unlimited Sub & Parked Domains","30 Days Unconditional Furentee","Free Domain","Disk space",];

  const itemOneArrayItration = itemOneArray.map((item,index) => <li key={index}>{item}</li>)

  return (
    <section className="support">
      <div className="container">
        <Heading headContent={headingTxt} />
        <div className="support-item">
          <Tabs>
            <Tab title="tab-1">
              <ul>{itemOneArrayItration}</ul>
            </Tab>
            <Tab title="tab-2">
              <div>Lorem ipsum dolor sit2.</div>
            </Tab>
            <Tab title="tab-3">
              <div>Lorem ipsum dolor sit1.</div>
            </Tab>
            <Tab title="tab-4">
              <div>Lorem ipsum dolor sit2.</div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Support;
