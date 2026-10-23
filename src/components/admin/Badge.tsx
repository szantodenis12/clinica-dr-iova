import { STATUS, type Status } from "@/data/admin";

export default function Badge({ st }: { st: Status }) {
  return <span className={"badge s-" + st}>{STATUS[st]}</span>;
}
