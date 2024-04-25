const co2Ampel = {
  type: "category",
  label: ":CO2 Ampel",
  link: {
    type: "doc",
    id: "products/co2Ampel/co2Ampel-overview",
  },
  items: [
    {
      type: "category",
      label: "Aufbau und Installation",
      link: {
        type: "generated-index",
        title: "Hardware",
      },
      items: [
        "products/co2Ampel/aufbau/aufbau-co2Ampel-schritt-1",
        "products/co2Ampel/aufbau/aufbau-co2Ampel-schritt-2",
        "products/co2Ampel/aufbau/aufbau-co2Ampel-schritt-3",
        "products/co2Ampel/aufbau/aufbau-co2Ampel-schritt-4",
      ],
    },
    {
      type: "category",
      label: "Hardware",
      link: {
        type: "generated-index",
        title: "Hardware",
      },
      items: [
        "hardware/sensors/co2",
        "hardware/accessoires/display",
        "hardware/accessoires/rgb-led",
      ],
    },
  ],
};

export default co2Ampel;
