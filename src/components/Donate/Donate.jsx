import React, { useState } from "react";
import "./Donate.css";
import { AccountData } from "../../dummyData";
import { Img21 } from "../Asset/Images";
function Donate() {
  const data = AccountData;
  const [toggleDonate, HandletoggleDoante] = useState(true);

  const HandleCopyNumber = (Account) => {
    let copyText = Account;
    navigator.clipboard.writeText(copyText);
    alert("Successfully copied Account Details");
  };
  return (
    <div className="wrapper">
      <div className="DonateMainWrapper">
        <div className="donateCard">
          <h1>Your gifts keeps a girl in school </h1>

          <h3>
            Every donation of $10, $20 or more you give can help provide free
            sanitary pads for a girl like josephine{" "}
          </h3>

          <button
            className="donatebtn"
            onClick={() => HandletoggleDoante(!toggleDonate)}
          >
            DONATE NOW
          </button>
        </div>

        <div className="DonateImageCon">
          <img src={Img21} alt="" />
        </div>

        <div className={`donateCardOverlay ${toggleDonate ? "see" : " "}`}>
          <div className="Donatecontainer">
            <div className="iconCon">
              <span className="icon" title="go to previous page ">
                <i
                  onClick={() => HandletoggleDoante(!toggleDonate)}
                >X</i>
              </span>
            </div>
            <h1>Copy Account Number and make donation from desuired bank </h1>
            {data &&
              data.map((AccountDetail) => (
                <div key={AccountDetail.id} className="AccountCon">
                  <div className="Number">
                    <div>
                      <span>AccName:</span>
                      <span className="bankName">{AccountDetail.AccName}</span>
                    </div>
                    <div>
                      <span>BankName:</span>
                      <span className="bankName">{AccountDetail.BankName}</span>
                    </div>
                    <div className="bankdetails_container">
                      <span>Acc Number :</span>
                      <span className="bankName">
                        {AccountDetail.AccountNumber}
                      </span>

                      <div
                        className="icon"
                        title="Copy Account Number"
                        onClick={() =>
                          HandleCopyNumber(AccountDetail.AccountNumber)
                        }
                      >
                        <i className="bi bi-pencil"></i>
                      </div>
                    </div>
                    {AccountDetail.SortCode && (
                      <div className="bankdetails_container">
                        <span>Source Code :</span>
                        <span className="bankName">
                          {AccountDetail.SortCode}
                        </span>

                        <div
                          className="icon"
                          title="Copy Account Number"
                          onClick={() =>
                            HandleCopyNumber(AccountDetail.SortCode)
                          }
                        >
                          <i className="bi bi-pencil"></i>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            <h2>Thank You for Your donation we really apreciate!!! </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donate;
