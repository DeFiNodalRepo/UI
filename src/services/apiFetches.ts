export async function getStrats() {
  const res = await fetch('http://127.0.0.1:8081/strats');
  const data = await res.json();
  return data;
}

export async function getPlatforms() {
  const res = await fetch('http://127.0.0.1:8081/platforms');
  const data = await res.json();
  return data;
}

export async function getPoolsAPY() {
  const res = await fetch('http://127.0.0.1:8081/poolsAPY');
  const data = await res.json();
  return data;
}

export async function getTokens() {
  const res = await fetch('http://127.0.0.1:8081/tokens');
  const data = await res.json();
  return data;
}

export async function getTokenPrices() {
  const res = await fetch('http://127.0.0.1:8081/tokenprices');
  const data = await res.json();
  return data;
}
