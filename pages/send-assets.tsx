import { NextPage } from "next";
import FormGroup from "../components/FormGroup";
import IconButton from "../components/IconButton";

const SendAssetsPage: NextPage = () => (
  <div className="h-full bg-white flex flex-col items-stretch">
    <div className="flex flex-row py-4 px-6 bg-white relative shadow-[0px_4px_12px_0px_rgba(247,249,252,1)]">
      <h1 className="grow font-bold text-sm text-center">Send Assets</h1>
      <IconButton className="left-6 top-1/2 -translate-y-1/2 absolute" iconSrc="/Back.svg" />
    </div>
    <div className="flex flex-col gap-4 items-stretch px-5 py-4 overflow-x-hidden overflow-y-auto grow">
      <FormGroup>
        <label>From</label>
        <input type="text" defaultValue="My Wallet (7300...3334)" disabled></input>
      </FormGroup>
      <FormGroup>
        <label>To</label>
        <input type="text"></input>
      </FormGroup>
      <FormGroup>
        <label>Asset</label>
        <input type="text" defaultValue="EUR"></input>
      </FormGroup>
      <FormGroup>
        <label>Amount</label>
        <input type="text"></input>
      </FormGroup>
    </div>
    <div className="flex flex-row items-center justify-center gap-4 py-5">
      <button type="button" className="w-40 btn">
        Cancel
      </button>
      <button type="button" className="w-40 btn primary">
        Send
      </button>
    </div>
  </div>
);

export default SendAssetsPage;
