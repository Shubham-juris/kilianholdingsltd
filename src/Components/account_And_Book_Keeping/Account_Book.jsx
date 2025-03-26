import accountBookImg from "../../assets/AccountingBook/accountBook.jpg"; // Importing the image properly

function Account_Book() {
  return (
    <>
      {/* Upper part */}
      <div className="mt-6 px-16">
        <h1 className="text-[#0C3F40] text-center text-4xl font-bold mb-20 pt-8">
          Welcome to Kilianholding Accounting and Bookkeeping Services
        </h1>

        <div className="flex justify-between">
          <div className="w-[65%]">
            <h2 className="text-2xl font-normal mb-8">
              Kilian Holdings Ltd Consulting: Your Partner in Business Growth
            </h2>

            <p className="text-[15px]/[26px] text-justify mb-4">
              At Kilian Holdings, we offer comprehensive accounting and
              bookkeeping services designed to streamline financial management
              and support the growth and success of businesses. With our
              expertise and dedication to excellence, we provide tailored
              solutions to meet the unique needs of each client.
            </p>

            <p className="text-[15px]/[26px] text-justify mb-14">
              Accounting and bookkeeping serve as the backbone of financial
              management for businesses of all sizes. These essential functions
              involve the systematic recording, organizing, and analysis of
              financial transactions to ensure accuracy, compliance, and
              informed decision-making.
            </p>
          </div>

          <div className="min-w-[200px] max-w-[27%]">
            <img
              className="w-full"
              src={accountBookImg}
              alt="Accounting Book"
            />
          </div>
        </div>
      </div>

      {/* 2nd Part */}
      <div className="bg-[#0C3F40] w-full text-white py-16 px-24">
        <h1 className="text-center text-4xl font-medium">
          Key Aspects of Accounting and Bookkeeping
        </h1>

        <div className="mt-16 flex flex-wrap justify-center gap-10">
          {/* Record-Keeping */}
          <div className="w-[333px]">
            <h2 className="text-2xl text-center">Record-Keeping</h2>
            <img
              className="w-full mt-7"
              src={accountBookImg}
              alt="Record Keeping"
            />
            <p className="text-center p-6">
              Accountants and bookkeepers maintain detailed records of all
              financial transactions, including sales, purchases, expenses, and
              payments. This meticulous record-keeping provides a clear picture
              of a company financial health and performance.
            </p>
          </div>

          {/* Financial Reporting */}
          <div className="w-[333px]">
            <h2 className="text-2xl text-center">Financial Reporting</h2>
            <img
              className="w-full mt-7"
              src={accountBookImg}
              alt="Financial Reporting"
            />
            <p className="text-center p-6">
              Through financial statements such as balance sheets and cash flow
              statements, accountants offer insights into a company
              profitability, liquidity, and solvency. These reports assist in
              strategic decision-making.
            </p>
          </div>

          {/* Budgeting and Forecasting */}
          <div className="w-[333px]">
            <h2 className="text-2xl text-center">Budgeting & Forecasting</h2>
            <img
              className="w-full mt-7"
              src={accountBookImg}
              alt="Budgeting & Forecasting"
            />
            <p className="text-center p-6">
              Professionals assist businesses in creating budgets and financial
              forecasts, helping them manage finances effectively. This ensures
              efficient resource allocation and realistic financial goals.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account_Book;
