import { Service_data } from "../../../service_data";

export default function handler(req, res) {
  res.status(200).json(Service_data);
}
