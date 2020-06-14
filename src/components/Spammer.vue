<template>
  <div class="spammer">
    <button @click="onClick">Send</button>
  </div>
</template>

<script>
export default {
  name: 'Spammer',
  methods: {
    onClick() {
      console.log("log", this.$iota)
      const minimumWeightMagnitude = 10;
      // Define a seed and an address.
      // These do not need to belong to anyone or have IOTA tokens.
      // They must only contain a mamximum of 81 trytes
      // or 90 trytes with a valid checksum
      const address =
        'HEQLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWOR99D';
      const seed =
        'PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX';

      const transfers = [
        {
          value: 0,
          address: address,
          message: "HELLOWORLD"
        }
      ];
      
     this.$iota.sendTransfers(seed, transfers, minimumWeightMagnitude).then((data) => {
       console.log("data", data)
     })
    }
  }
}
</script>