const clickF = (start) => {
  const damageFirstGun = document.getElementById('damageFirstGun').value;
  const damageSecondGun = document.getElementById('damageSecondGun').value;

  const aimFirstGun = document.getElementById('aimFirstGun').value;
  const aimSecondGun = document.getElementById('aimSecondGun').value;

  const speedFireFirstGun = document.getElementById('speedFireFirstGun').value;
  const speedFireSecondGun = document.getElementById('speedFireSecondGun').value;

  let timeOfCheckBox = 0;
  const tempFor_timeofCheckBox = document.querySelectorAll('input[name="flexRadioDefault"]');
  for (const item of tempFor_timeofCheckBox) {
    if (item.checked) {
      timeOfCheckBox = item.value;
    }
  };

  const damageNumbModFirst = document.getElementById('damageNumbModFirst').value;
  const AimNumbModFirst = document.getElementById('AimNumbModFirst').value;
  const speedFireNumbModFirst = document.getElementById('speedFireNumbModFirst').value;

  const damageNumbModSecond = document.getElementById('damageNumbModSecond').value;
  const AimNumbModSecond = document.getElementById('AimNumbModSecond').value;
  const speedFireNumbModSecond = document.getElementById('speedFireNumbModSecond').value;


  const speedFireGunResultFunc = (speedFire, speedFireMod, time) => {
    const secondInMinute = 60;
    let result = 0;
    let resultPercentPlus = 0;
    if (speedFireMod === 0) {
      result = (speedFire / secondInMinute) * time;
    }
    if (speedFireMod !== 0) {
      resultPercentPlus = speedFire * (speedFireMod / 100) - (-speedFire);
      result = (resultPercentPlus / secondInMinute) * time;
    }
    return result
  };

  const speedFireFirstGunResult = speedFireGunResultFunc(speedFireFirstGun, speedFireNumbModFirst, timeOfCheckBox);
  const speedFireSecondGunResult = speedFireGunResultFunc(speedFireSecondGun, speedFireNumbModSecond, timeOfCheckBox);
  const speedFireFirstGunResultOut = speedFireFirstGunResult.toFixed(2);
  const speedFireSecondGunResultOut = speedFireSecondGunResult.toFixed(2);

  const damageFirstGunInTime = ((damageFirstGun - (-damageNumbModFirst)) * speedFireFirstGunResult);
  const damageSecondGunInTime = ((damageSecondGun - (-damageNumbModSecond)) * speedFireSecondGunResult);
  const damageFirstGunInTimeOut = damageFirstGunInTime.toFixed(2);
  const damageSecondGunInTimeOut = damageSecondGunInTime.toFixed(2);

  const aimFirstGunResult = (aimFirstGun * (AimNumbModFirst / 100)) - (-aimFirstGun);
  const aimSecondGunResult = (aimSecondGun * (AimNumbModSecond / 100)) - (-aimSecondGun);
  const aimFirstGunResultOut = aimFirstGunResult.toFixed(2);
  const aimSecondGunResultOut = aimSecondGunResult.toFixed(2);


  const timeOfCheckBoxResult1 = () => {
    let damageOutForResultHTML;
    damageOutForResultHTML = document.getElementById('timeOfCheckBoxResult1');
    damageOutForResultHTML.innerHTML = timeOfCheckBox;
  }
  timeOfCheckBoxResult1();

  const timeOfCheckBoxResult2 = () => {
    let damageOutForResultHTML;
    damageOutForResultHTML = document.getElementById('timeOfCheckBoxResult2');
    damageOutForResultHTML.innerHTML = timeOfCheckBox;
  }
  timeOfCheckBoxResult2();

  const p1_1 = () => {
    let tempHTML;
    tempHTML = document.getElementById('p1_1');
    tempHTML.innerHTML = damageFirstGunInTimeOut;
  }
  p1_1();

  const p1_2 = () => {
    let tempHTML;
    tempHTML = document.getElementById('p1_2');
    tempHTML.innerHTML = speedFireFirstGunResultOut;
  }
  p1_2();

  const p1_3 = () => {
    let tempHTML;
    tempHTML = document.getElementById('p1_3');
    tempHTML.innerHTML = aimFirstGunResultOut;
  }
  p1_3();

  const p2_1 = () => {
    let tempHTML;
    tempHTML = document.getElementById('p2_1');
    tempHTML.innerHTML = damageSecondGunInTimeOut;
  }
  p2_1();

  const p2_2 = () => {
    let tempHTML;
    tempHTML = document.getElementById('p2_2');
    tempHTML.innerHTML = speedFireSecondGunResultOut;
  }
  p2_2();

  const p2_3 = () => {
    let tempHTML;
    tempHTML = document.getElementById('p2_3');
    tempHTML.innerHTML = aimSecondGunResultOut;
  }
  p2_3();
};
