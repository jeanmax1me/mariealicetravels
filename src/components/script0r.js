import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

let inputString = 
"https://www.booking.com/hotel/fr/le-clem-100m-des-plages-suquet-verriere-cote-d-azur.fr.html?aid=356980&label=gog235jc-1FCAMoTUIGY2FubmVzSDNYA2hNiAEBmAENuAEXyAEM2AEB6AEB-AEDiAIBqAIDuAL2xc-mBsACAdICJGFlYTMyZDBhLWNiMTAtNDVjMi04YTg3LThjZTU0N2Y4OWNjNdgCBeACAQ&sid=03d70092256621f8da17e3e952131a1f&all_sr_blocks=709754301_295795521_1_0_0&checkin=2023-09-30&checkout=2023-10-01&dest_id=-1416533&dest_type=city&dist=0&group_adults=1&group_children=0&hapos=34&highlighted_blocks=709754301_295795521_1_0_0&hpos=9&matching_block_id=709754301_295795521_1_0_0&nflt=privacy_type%3D3%3Bht_id%3D201&no_rooms=1&req_adults=1&req_children=0&room1=A&sb_price_type=total&sr_order=upsort_bh&sr_pri_blocks=709754301_295795521_1_0_0__19170&srepoch=1691607869&srpvid=2e40860797900026&type=total&ucfs=1&activeTab=photosGallery"


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