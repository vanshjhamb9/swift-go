export default async function handler(req, res) {
  const apkUrl = 'https://drive.google.com/uc?export=download&id=1SrCzq7C3-nYr0HYQv28drx2soSLwqm4b';

  const response = await fetch(apkUrl);

  if (!response.ok) {
    return res.status(500).send('Failed to download APK.');
  }

  res.setHeader('Content-Type', 'application/vnd.android.package-archive');
  res.setHeader('Content-Disposition', 'attachment; filename="user.apk"');

  
  response.body.pipe(res);
}
