let MineBase64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAgCAIAAACU62+bAAAKOWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAEjHnZZ3VFTXFofPvXd6oc0wAlKG3rvAANJ7k15FYZgZYCgDDjM0sSGiAhFFRJoiSFDEgNFQJFZEsRAUVLAHJAgoMRhFVCxvRtaLrqy89/Ly++Osb+2z97n77L3PWhcAkqcvl5cGSwGQyhPwgzyc6RGRUXTsAIABHmCAKQBMVka6X7B7CBDJy82FniFyAl8EAfB6WLwCcNPQM4BOB/+fpFnpfIHomAARm7M5GSwRF4g4JUuQLrbPipgalyxmGCVmvihBEcuJOWGRDT77LLKjmNmpPLaIxTmns1PZYu4V8bZMIUfEiK+ICzO5nCwR3xKxRoowlSviN+LYVA4zAwAUSWwXcFiJIjYRMYkfEuQi4uUA4EgJX3HcVyzgZAvEl3JJS8/hcxMSBXQdli7d1NqaQffkZKVwBALDACYrmcln013SUtOZvBwAFu/8WTLi2tJFRbY0tba0NDQzMv2qUP91829K3NtFehn4uWcQrf+L7a/80hoAYMyJarPziy2uCoDOLQDI3fti0zgAgKSobx3Xv7oPTTwviQJBuo2xcVZWlhGXwzISF/QP/U+Hv6GvvmckPu6P8tBdOfFMYYqALq4bKy0lTcinZ6QzWRy64Z+H+B8H/nUeBkGceA6fwxNFhImmjMtLELWbx+YKuGk8Opf3n5r4D8P+pMW5FonS+BFQY4yA1HUqQH7tBygKESDR+8Vd/6NvvvgwIH554SqTi3P/7zf9Z8Gl4iWDm/A5ziUohM4S8jMX98TPEqABAUgCKpAHykAd6ABDYAasgC1wBG7AG/iDEBAJVgMWSASpgA+yQB7YBApBMdgJ9oBqUAcaQTNoBcdBJzgFzoNL4Bq4AW6D+2AUTIBnYBa8BgsQBGEhMkSB5CEVSBPSh8wgBmQPuUG+UBAUCcVCCRAPEkJ50GaoGCqDqqF6qBn6HjoJnYeuQIPQXWgMmoZ+h97BCEyCqbASrAUbwwzYCfaBQ+BVcAK8Bs6FC+AdcCXcAB+FO+Dz8DX4NjwKP4PnEIAQERqiihgiDMQF8UeikHiEj6xHipAKpAFpRbqRPuQmMorMIG9RGBQFRUcZomxRnqhQFAu1BrUeVYKqRh1GdaB6UTdRY6hZ1Ec0Ga2I1kfboL3QEegEdBa6EF2BbkK3oy+ib6Mn0K8xGAwNo42xwnhiIjFJmLWYEsw+TBvmHGYQM46Zw2Kx8lh9rB3WH8vECrCF2CrsUexZ7BB2AvsGR8Sp4Mxw7rgoHA+Xj6vAHcGdwQ3hJnELeCm8Jt4G749n43PwpfhGfDf+On4Cv0CQJmgT7AghhCTCJkIloZVwkfCA8JJIJKoRrYmBRC5xI7GSeIx4mThGfEuSIemRXEjRJCFpB+kQ6RzpLuklmUzWIjuSo8gC8g5yM/kC+RH5jQRFwkjCS4ItsUGiRqJDYkjiuSReUlPSSXK1ZK5kheQJyeuSM1J4KS0pFymm1HqpGqmTUiNSc9IUaVNpf+lU6RLpI9JXpKdksDJaMm4ybJkCmYMyF2TGKQhFneJCYVE2UxopFykTVAxVm+pFTaIWU7+jDlBnZWVkl8mGyWbL1sielh2lITQtmhcthVZKO04bpr1borTEaQlnyfYlrUuGlszLLZVzlOPIFcm1yd2WeydPl3eTT5bfJd8p/1ABpaCnEKiQpbBf4aLCzFLqUtulrKVFS48vvacIK+opBimuVTyo2K84p6Ss5KGUrlSldEFpRpmm7KicpFyufEZ5WoWiYq/CVSlXOavylC5Ld6Kn0CvpvfRZVUVVT1Whar3qgOqCmrZaqFq+WpvaQ3WCOkM9Xr1cvUd9VkNFw08jT6NF454mXpOhmai5V7NPc15LWytca6tWp9aUtpy2l3audov2Ax2yjoPOGp0GnVu6GF2GbrLuPt0berCehV6iXo3edX1Y31Kfq79Pf9AAbWBtwDNoMBgxJBk6GWYathiOGdGMfI3yjTqNnhtrGEcZ7zLuM/5oYmGSYtJoct9UxtTbNN+02/R3Mz0zllmN2S1zsrm7+QbzLvMXy/SXcZbtX3bHgmLhZ7HVosfig6WVJd+y1XLaSsMq1qrWaoRBZQQwShiXrdHWztYbrE9Zv7WxtBHYHLf5zdbQNtn2iO3Ucu3lnOWNy8ft1OyYdvV2o/Z0+1j7A/ajDqoOTIcGh8eO6o5sxybHSSddpySno07PnU2c+c7tzvMuNi7rXM65Iq4erkWuA24ybqFu1W6P3NXcE9xb3Gc9LDzWepzzRHv6eO7yHPFS8mJ5NXvNelt5r/Pu9SH5BPtU+zz21fPl+3b7wX7efrv9HqzQXMFb0ekP/L38d/s/DNAOWBPwYyAmMCCwJvBJkGlQXlBfMCU4JvhI8OsQ55DSkPuhOqHC0J4wybDosOaw+XDX8LLw0QjjiHUR1yIVIrmRXVHYqLCopqi5lW4r96yciLaILoweXqW9KnvVldUKq1NWn46RjGHGnIhFx4bHHol9z/RnNjDn4rziauNmWS6svaxnbEd2OXuaY8cp40zG28WXxU8l2CXsTphOdEisSJzhunCruS+SPJPqkuaT/ZMPJX9KCU9pS8Wlxqae5Mnwknm9acpp2WmD6frphemja2zW7Fkzy/fhN2VAGasyugRU0c9Uv1BHuEU4lmmfWZP5Jiss60S2dDYvuz9HL2d7zmSue+63a1FrWWt78lTzNuWNrXNaV78eWh+3vmeD+oaCDRMbPTYe3kTYlLzpp3yT/LL8V5vDN3cXKBVsLBjf4rGlpVCikF84stV2a9021DbutoHt5turtn8sYhddLTYprih+X8IqufqN6TeV33zaEb9joNSydP9OzE7ezuFdDrsOl0mX5ZaN7/bb3VFOLy8qf7UnZs+VimUVdXsJe4V7Ryt9K7uqNKp2Vr2vTqy+XeNc01arWLu9dn4fe9/Qfsf9rXVKdcV17w5wD9yp96jvaNBqqDiIOZh58EljWGPft4xvm5sUmoqbPhziHRo9HHS4t9mqufmI4pHSFrhF2DJ9NProje9cv+tqNWytb6O1FR8Dx4THnn4f+/3wcZ/jPScYJ1p/0Pyhtp3SXtQBdeR0zHYmdo52RXYNnvQ+2dNt293+o9GPh06pnqo5LXu69AzhTMGZT2dzz86dSz83cz7h/HhPTM/9CxEXbvUG9g5c9Ll4+ZL7pQt9Tn1nL9tdPnXF5srJq4yrndcsr3X0W/S3/2TxU/uA5UDHdavrXTesb3QPLh88M+QwdP6m681Lt7xuXbu94vbgcOjwnZHokdE77DtTd1PuvriXeW/h/sYH6AdFD6UeVjxSfNTws+7PbaOWo6fHXMf6Hwc/vj/OGn/2S8Yv7ycKnpCfVEyqTDZPmU2dmnafvvF05dOJZ+nPFmYKf5X+tfa5zvMffnP8rX82YnbiBf/Fp99LXsq/PPRq2aueuYC5R69TXy/MF72Rf3P4LeNt37vwd5MLWe+x7ys/6H7o/ujz8cGn1E+f/gUDmPP8usTo0wAABL5JREFUOMs9k0tv20YQx2d3+ZJIiZREiZYlS7GtyHHluEh7aBG0SA8B2mO/Qb9JP14vRQMkqFO/Y8m2bMqUzKfE5XK5PbDoZTDAzPzxmxf67Xc9iPnJjE4GKgCUzsmMjrpYleXzuzRNkaaJcV+jjJ1NCxKZuVUT0bp49HnHlMyquH5gzRpOGRgaMSoioUWaIsDF3VKM+xgDgJ+IcV+bDFTK2OVDMe5r434liIsylKbIsZHrCbuOzqYFJgqM+xXTIK6f+YmQsQCAIOYlnmMpxyMVADRNAIBjI8muoyDmny7p8Uj9dEmJgihjADDua2UNAEwGKkDmWMr5XSo5luL62fFILW1JZddREKcAYNexYymlxMmMjrpEooy5nvBCKmMRxP/NxPVA0yBNkWnAyYzadQQAANBpaKR9hIwq2nXUVl169PnrXdWoiF5befR5p4G8UEwGapJyLxQ8g/sVk4K4YAUCyACgVDqbFpqWTgZauZPzuxQARl3iJ8LSER46ZNTFQVx4oShxNU2wAlHG3n5VpYwNHVLCBHGhyjL2E3E2LYYO4RmYBjmbFqxAk4HqJ+KPz+syCgB/nialCqm/FPs90mloloHDJLMthDHMPTbsqB1Tmi7ysisvglEXXz4UxDpEq1hsaJ6kfOBUPpxlRhXFKTw+8WCdN2v4+i73N2LUxVOXH+5oWMai7NWxlCDmB0MMADwDx0amgS0dAUCZzQp0fpdiViDHUhxLAYByIF4oynuxdKTK8sEQdxpauW9WIGKNkBfzp4B3TOl+wSUZtpu421RmC2rqCmVs6nJDI3lRzD3WrGFMlPJUAACOR6oXClWWT2a0hJm6PE3RPzOq6WjoENcTxBqh8h9uvbxiiDAWfpT//w8p5zkHlsF6Ix79AgmESxnHIXYDuS5nuXAc0murq1AEjIURsAz6XrtyZqoSAgAMAAdbioXI40zwAmEEUVzcLFLGxXRaJM+i2YJmLVTZBgBkBcjbQW+uBTcPxffq4S33QCD9fFSLWu00hh7/OtWuKP+592PTqj9f52E9kSw1uoyg2YJXpLOeXlP2or93H4eMC3Thi5+7367vlkjBLdNU2Yl9pZL3b46uPiwdRiZ7B3m+4tnizct3W60dnle98wzoZr6414mWrNeO3Uo2S8luG20dLA1F6812fbLdBCIBAunRC/e31jud3V63I0lKGG6m84ejF0dk0KmkKdvvjxESZr0KAhar6OLLvNu2J/uHIMjTcjm/d/1krVerj95SatR0Ae3Ti8vXk4m7ij5+vjCq6ttvXiOCbu/dMIrrugEAdd0Ik3jY3ye//PBKlZXd/ouPp6dJJt59d4QQrKINwdgyKr3tLRBYiAIAHHsLASY/vdlrWFWtIg23uxu6ZhnHWFx/maVrimWkqxql2efz6zSjrusBEuTX90ecc4RRRVGrmrJ4WkXJWq1oTreTUxbGiSTLulFRiDzY2fbCgAxt1WqYjLGM8fnTcxLFZr22WTND19qWaejaxZd5Ta83LcuyjJxlZDJqYkCXN7dcIAkXFzeuVKkyvslz2raaG1ZQmva2GpRyzw8QFLhl6iyjjbqRM/rXx7/3h02WxXs72xdXN/PFAgAUSV4G62f/yahUCFb/BSL1tqRzBN9lAAAAAElFTkSuQmCC';

_LoadTexture = (base64Texture) => {
	// base64
	let texture = new THREE.TextureLoader().load( base64Texture );
	texture.magFilter = THREE.NearestFilter;
	texture.minFilter = THREE.LinearMipMapLinearFilter;
	return texture;
};

_LoadGeometry = () => {

	let geometry = new THREE.Geometry();
	let light = new THREE.Color( 0xffffff );
	let shadow = new THREE.Color( 0x505050 );
	let matrix = new THREE.Matrix4();

	let py2Geometry = new THREE.PlaneGeometry( 100, 100 );
	py2Geometry.faces[ 0 ].vertexColors = [ light, light, light ];
	py2Geometry.faces[ 1 ].vertexColors = [ light, light, light ];
	py2Geometry.faceVertexUvs[ 0 ][ 0 ][ 1 ].y = 0.5;
	py2Geometry.faceVertexUvs[ 0 ][ 1 ][ 0 ].y = 0.5;
	py2Geometry.faceVertexUvs[ 0 ][ 1 ][ 1 ].y = 0.5;
	py2Geometry.rotateX( - Math.PI / 2 );
	py2Geometry.rotateY( Math.PI / 2 );
	py2Geometry.translate( 0, 50, 0 );

	geometry.merge( py2Geometry, matrix );

	return geometry;
};

_LoadMesh = (g, t) => {
	let mesh = new THREE.Mesh(g, new THREE.MeshLambertMaterial( { map: t, vertexColors: THREE.VertexColors } ) );
	_Gm.scene.add( mesh );
	return mesh;
};

_SetLight = () => {

	let ambientLight = new THREE.AmbientLight( 0xcccccc );
	_Gm.scene.add( ambientLight );

	let directionalLight = new THREE.DirectionalLight( 0xffffff, 2 );
	directionalLight.position.set( 1, 1, 0.5 ).normalize();
	_Gm.scene.add( directionalLight );
};
		

