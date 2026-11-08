# Lottery, slots and shop

## Lottery, slot machines, shop

```java
LotteryAPI.getPot();  LotteryAPI.addToPot(1000);      // a sponsored round
LotteryAPI.buyTickets(uuid, name, 5);                 // null when bought, otherwise why not
SlotMachineAPI.getJackpot();  SlotMachineAPI.addToJackpot(500);
ShopAPI.setOffer("Food_Fish_Raw", 20, 8, "Food");     // add or reprice; false if the shop is full
ShopAPI.removeOffer("Food_Fish_Raw");
ShopAPI.buyPrice("Food_Bread");                       // with the server's sale percentage
```
