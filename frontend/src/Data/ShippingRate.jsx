const ShippingRates = {
  Pune: {
    Mumbai: 1,
    Bangalore: 2,
    Chennai: 3,
    Delhi: 4,
  },
  Mumbai: {
    Pune: 1,
    Bangalore: 2,
    Chennai: 3,
    Delhi: 4,
  },
  Bangalore: { Pune: 1, Mumbai: 2, Chennai: 3, Delhi: 4 },
  Chennai: {
    Pune: 3,
    Mumbai: 1,
    Bangalore: 2,
    Delhi: 4,
  },
  Delhi: {
    Pune: 4,
    Mumbai: 1,
    Bangalore: 2,
    Chennai: 3,
  },
};

export default ShippingRates;
