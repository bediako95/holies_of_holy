import { services_information } from "../../../service_data";

export default function handler({ query: { desc } }, res) {
  const filtered = services_information.filter((data) => data.desc === desc);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res
      .status(404)
      .json({ message: `Service with description ${desc} cannot be found` });
  }
}
