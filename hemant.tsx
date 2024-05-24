import React, { FC } from "react";

export interface ICard {
  points?: any;
  customClass?: any;
  pointClass?: any;
  groupsvg?: any;
  RedeemClass?: any;
  pointBalance?: any;
  selectPointClass?: any;
  circleClass?: any;
  svgClass?: any;
  BalanceClass?: any;
  pointBalanceClass?: any;
  redeem?: any;
  onselect: () => void;
}

export const WalletCard: FC<ICard> = ({
  points,
  customClass,
  pointClass,
  groupsvg,
  RedeemClass,
  pointBalance,
  selectPointClass,
  circleClass,
  svgClass,
  BalanceClass,
  pointBalanceClass,
  redeem,
  onselect,
}) => {
  return (
    <>
      <div
        className={`lg:w-[170px] lg:h-[251px] md:w-[36rem] md:h-[14rem] h-[13rem] w-[20rem] top-[320px] left-[399px] font-medium max-w-sm  rounded-[21px] sm:p-2 ${customClass}`}
      >
        <div className="lg:items-center lg:justify-center ">
          <div className="flex lg:flex-col  lg:items-center md:items-start items-start lg:mb-4 lg:mt-2 lg:ml-[6px] md:ml-3 md:mt-2 mt-2 ml-3">
            <div
              className={`lg:w-[68px] lg:h-[68px] md::w-[68px] md:h-[68px] w-[60px] h-[60px] top-[338px] left-[458px] ${pointClass} text-center font-poppins rounded-full flex items-center justify-center text-4xl  space-x-2 space-y-2`}
            >
              <div
                className={`w-[53px] h-[53px] top-[312px] left-[422px] ${circleClass} rounded-full`}
              >
                <img src={groupsvg} alt="" className={`${svgClass}`} />
              </div>
            </div>
          </div>
          <div className={`${RedeemClass}`}>
            <div className="lg:text-center lg:w-[10rem] flex justify-center items-center text-[25px]">
              {!points?.length ? (
                points
              ) : (
                <div className="w-5 h-5 border-t-2 border-b-2 border-gray-900 rounded-full animate-spin"></div>
              )}
            </div>
            <div
              className={`lg:items-center lg:justify-center lg:max-w-[10vw] text-center text-wrap text-sm ${BalanceClass} `}
            >
              <p className={`${pointBalanceClass}`}>{pointBalance}</p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center pt-5 lg:mt-[20px]">
          <div
            className={`md:w-fit md:min-h-[30px]  lg:w-fit min-h-[30px] w-fit  h-auto ${selectPointClass} border border-[#056E9C] border-solid text-[#056E9C] lg:items-center text-center rounded-3xl px-4   wborder-spacing-[0.82px] cursor-pointer`}
          >
            <button
              className="lg:items-center  lg:justify-center mt-1 text-sm font-medium text-center cursor-pointer font-poppins"
              onClick={onselect}
            >
              {redeem}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
