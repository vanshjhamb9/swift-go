export default async function handler(req, res) {
  const apkUrl = 'https://github.com/vanshjhamb9/swift-go/releases/download/apk/swift_go_user.apk';

  const response = await fetch(apkUrl);

  if (!response.ok) {
    return res.status(500).send('Failed to download APK.');
  }

  console.log("Downloading from another sever");

  res.setHeader('Content-Type', 'application/vnd.android.package-archive');
  res.setHeader('Content-Disposition', 'attachment; filename="user.apk"');

  
  response.body.pipe(res);
}
