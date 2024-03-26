export const fetchFlags = async () => {
  const urls = [
    'https://flagsapi.com/IL/shiny/64.png',
    'https://flagsapi.com/IE/shiny/64.png',
    'https://flagsapi.com/ID/shiny/64.png',
    'https://flagsapi.com/IS/shiny/64.png',
    'https://flagsapi.com/IT/shiny/64.png',
    'https://flagsapi.com/JP/shiny/64.png',
    'https://flagsapi.com/KR/shiny/64.png',
    'https://flagsapi.com/MC/shiny/64.png',
    'https://flagsapi.com/PE/shiny/64.png',
    'https://flagsapi.com/GT/shiny/64.png',
    'https://flagsapi.com/ES/shiny/64.png',
    'https://flagsapi.com/GE/shiny/64.png',
    'https://flagsapi.com/CL/shiny/64.png',
    'https://flagsapi.com/CA/shiny/64.png', // תוקן הטעות ב-URL
    'https://flagsapi.com/BE/shiny/64.png',
    'https://flagsapi.com/AR/shiny/64.png',
    'https://flagsapi.com/GB/shiny/64.png',
    'https://flagsapi.com/FR/shiny/64.png',
  ];

  try {
    const responses = await Promise.all(urls.map(url => fetch(url)));
    const data = await Promise.all(responses.map(res => res.blob()));
    // נניח שאנו מעוניינים להמיר את התמונה ל-URL בעזרת URL.createObjectURL
    return data.map(blob => URL.createObjectURL(blob));
  } catch (error) {
    console.error("Error fetching flags:", error);
    return [];
  }
};


     