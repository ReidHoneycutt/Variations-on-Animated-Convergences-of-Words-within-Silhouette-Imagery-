# Animation
- (1) Create image filter where the output is a set of point-pairs describing the edges of a silhouette
- (2) Calculate the number of characters per line
- (3) Create mappings between the letters and the character cells
- (4) Develop a "path" for each word
- (5) Calculate "path" length
- (6) Calculate velocity from length

Each word has it's own "path". A "path" is a piece-wise function combined with a set of path-connection points. A nudge along the function, and a collosion check is performed one per frame. 
