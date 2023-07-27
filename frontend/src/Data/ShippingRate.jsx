const ShippingRates = {
  pune: {
    mumbai: 1,
    bangalore: 2,
    chennai: 3,
    delhi: 4,
  },
  mumbai: {
    pune: 1,
    bangalore: 2,
    chennai: 3,
    delhi: 4,
  },
  bangalore: { pune: 1, mumbai: 2, chennai: 3, delhi: 4 },
  chennai: {
    pune: 3,
    mumbai: 1,
    bangalore: 2,
    delhi: 4,
  },
  delhi: {
    pune: 4,
    mumbai: 1,
    bangalore: 2,
    chennai: 3,
  },
};

export default ShippingRates;
