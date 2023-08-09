import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

let inputString = 
"https://www.booking.com/hotel/fr/three-bedroom-two-bathroom-apartment-in-center-of-cannes-on-quiet-street-minutes.fr.html?aid=356980&label=gog235jc-1FCAMoTTjWA0gNWANoTYgBAZgBDbgBF8gBDNgBAegBAfgBAogCAagCA7gC0OXOpgbAAgHSAiQ1ZTY3MzNhNC00ZjE4LTRjZDctYWMwOS1hNGIwZDQ5MDY3MGbYAgXgAgE&sid=442a3cf69691c86156d0f74c1df9d755&all_sr_blocks=859666802_375571276_8_0_0&checkin=2023-10-02&checkout=2023-10-03&dest_id=-1416533&dest_type=city&dist=0&group_adults=1&group_children=0&hapos=11&highlighted_blocks=859666802_375571276_8_0_0&hpos=11&matching_block_id=859666802_375571276_8_0_0&nflt=privacy_type%3D3%3Bht_id%3D201%3Bprice%3DEUR-350-max-1%3Bht_id%3D213&no_rooms=1&req_adults=1&req_children=0&room1=A&sb_price_type=total&sr_order=upsort_bh&sr_pri_blocks=859666802_375571276_8_0_0__66765&srepoch=1691599791&srpvid=882f76474c79020d&type=total&ucfs=1&activeTab=photosGallery"


let indexOfHtml = inputString.indexOf("html?");
if (indexOfHtml !== -1) {
  let resultString = inputString.substring(0, indexOfHtml + 5); // +5 to include "html?"
  let additionalString = "aid=8066595";
  let finalString = resultString + additionalString;

  // Generate a UUID
  const generatedUuid = uuidv4();

     // Create a JSON object with dynamically assigned UUID
  const jsonObject = {
    [generatedUuid]: finalString,
  };

  // Convert JSON object to string
  const jsonString = JSON.stringify(jsonObject, null, 2);

  // Write the JSON string to test.json
  fs.writeFileSync('test.json', jsonString);

  console.log("JSON Object:", jsonObject);
  console.log("https://mariealicetravels.vercel.app/" + generatedUuid);
} else {
  console.log("Substring not found");
}