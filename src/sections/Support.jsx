import React from "react";
import Heading from "../components/Heading";
import Tabbing from "../components/Tabbing";

const Support = () => {
  const headingTxt =
    "We are ready to support your buisness need to be more advance";

  const data = [
    {title: "Our main features", item:[ "Number of Website1","Number of Email Account1","Unlimited MySql Databases1","Unlimited Bandwidth1","unlimited Sub & Parked Domains1","30 Days Unconditional Furentee1","Free Domain1","Disk space1",], },
    {title: "Speed optimization", item:[ "Number of Website2","Number of Email Account2","Unlimited MySql Databases2","Unlimited Bandwidth2","unlimited Sub & Parked Domains2","30 Days Unconditional Furentee2","Free Domain2","Disk space2",], },
    {title: "Downtime and security optimization", item:[ "Number of Website3","Number of Email Account3","Unlimited MySql Databases3","Unlimited Bandwidth3","unlimited Sub & Parked Domains3","30 Days Unconditional Furentee3","Free Domain3","Disk space3",], },
    {title: "Additional features", item:[ "Number of Website4","Number of Email Account4","Unlimited MySql Databases4","Unlimited Bandwidth4","unlimited Sub & Parked Domains4","30 Days Unconditional Furentee4","Free Domain4","Disk space4",], },
    {title: "Best technical support service", item:[ "Number of Website4","Number of Email Account4","Unlimited MySql Databases4","Unlimited Bandwidth4","unlimited Sub & Parked Domains4","30 Days Unconditional Furentee4","Free Domain4","Disk space4",], },
  ];
  return (
    <section className="support">
      <div className="container">
        <Heading headContent={headingTxt} />
        <Tabbing data={data} />
      </div>
    </section>
  );
};

export default Support;
