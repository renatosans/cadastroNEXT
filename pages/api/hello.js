import fs from 'fs'
import path from 'path'


export default async function handler(req, res) {
	if ( !req.query.sampleText ) {
        res.send('Erro: parametro precisa ser informado!');
        return;
    }

	const dir = path.resolve('./public', 'img');
	const filenames = fs.readdirSync(dir);
	const images = filenames.map(name => path.join('/', 'img', name));
	// res.json(images);

	res.status(200).json({
		message: Buffer.from(req.query.sampleText).toString('base64')
	})
}
