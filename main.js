import 'https://deno.land/std/dotenv/load.ts';

Deno.serve(async (req) => {
  // 環境変数の読み込み
  const apiKey = Deno.env.get('API_KEY');
  console.log(apiKey);

  // メッセージボディを構成
  const body = JSON.stringify({ env: apiKey });

  return new Response(body, {
    headers: {
      'Access-Control-Allow-Origin': '*', // ここはあとできちんと設定する
      'content-type': 'application/json; charset=utf-8',
    },
  });
});
